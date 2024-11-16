import { useState, useRef, useEffect } from 'react';
import { ChatBubble } from '@components/chat/ChatBubble';
import { ChatBox } from '@components/chat/ChatBox';
import { GuideButton } from '@components/chat/GuideButton';
import { TabBar } from '@components/layout/tabBar/TabBar';
import { DetailModal } from '@components/common/modal/DetailModal';
import { useNavigate } from 'react-router-dom';
import * as S from './ChatPage.Style';
import ToastMessage from '@/components/chat/ToastMessage';
import { LoadingDots } from '@components/chat/LodingDots';
import { postAiChat, postTmpChat, checkTmpChat, getChat } from '@/api/Chat';

interface Message {
  message: string;
  isMe: boolean;
  isLoading?: boolean;
}

export const ChatPage = () => {
  const firstChat = localStorage.getItem('firstChat') || '안녕하세요! 경험을 작성해주세요.';
  const formattedFirstChat = firstChat.replace(/\n/g, '<br>');
  const chatRoomId = Number(localStorage.getItem('chatRoomId'));

  const [messages, setMessages] = useState<Message[]>([
    {
      message: formattedFirstChat,
      isMe: false,
      isLoading: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTempSaveModalOpen, setIsTempSaveModalOpen] = useState(false);
  const [isLoadTempModalOpen, setIsLoadTempModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showGuideButton, setShowGuideButton] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 임시 저장된 채팅 기록 확인 API 호출 추가
  useEffect(() => {
    const fetchTmpChatData = async () => {
      try {
        // 1. 임시 저장된 채팅 기록이 있는지 확인
        const tmpChatData = await checkTmpChat();

        if (tmpChatData.exist && tmpChatData.chatRoomId) {  // chatRoomId 존재 여부 확인 추가
          console.log("임시 저장된 기록이 있습니다:", tmpChatData);

          localStorage.setItem('chatRoomId', String(tmpChatData.chatRoomId));

          // 2. 임시 저장된 기록이 있으면 모달을 띄워 사용자에게 선택하도록 함
          setIsLoadTempModalOpen(true);
        } else {
          console.log("임시 저장된 기록이 없습니다.");
        }
      } catch (error) {
        console.error("임시 저장된 기록을 조회하는 중 오류가 발생했습니다:", error);
      }
    };

    fetchTmpChatData();
  }, []);

  const fetchChatHistory = async (chatRoomId: number | null) => {
    try {
      if (!chatRoomId) {
        throw new Error('유효하지 않은 채팅방 ID입니다.');
      }

      console.log('채팅 기록 조회 시작:', chatRoomId);
      const response = await getChat(chatRoomId);
      console.log('받은 채팅 기록:', response);

      if (response?.chats) {
        // 채팅 기록이 있는 경우
        const chatHistory = response.chats.map(chat => ({
          message: chat.content,
          isMe: (chat.author === 'user') ? true : false,
          isLoading: false
        }));

        console.log('변환된 채팅 기록:', chatHistory);

        if (chatHistory.length > 0) {
          setMessages(chatHistory);
          setShowGuideButton(false); // 채팅 기록이 있으면 가이드 버튼 숨김
        }
      } else {
        console.log('채팅 기록이 없습니다.');
        // 채팅 기록이 없는 경우 기본 메시지만 표시
        setMessages([{
          message: formattedFirstChat,
          isMe: false,
          isLoading: false,
        }]);
      }
    } catch (error) {
      console.error('채팅 기록을 불러오는데 실패했습니다:', error);
      // 에러 발생 시 기본 메시지 표시
      setMessages([{
        message: formattedFirstChat,
        isMe: false,
        isLoading: false,
      }]);
    }
  };


  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isNaN(chatRoomId)) return;

    try {
      setShowGuideButton(false);
      setMessages(prev => [...prev, { message, isMe: true, isLoading: false }]);

      setMessages(prev => [...prev, { message: '', isMe: false, isLoading: true }]);

      // 가이드가 아닌 일반 메시지 요청
      const response = await postAiChat(chatRoomId, { content: message });
      const aiResponse = response?.chats?.[0]?.content || '응답을 불러오지 못했습니다.';

      setMessages(prev => [
        ...prev.slice(0, -1),
        { message: aiResponse, isMe: false, isLoading: false }
      ]);
    } catch (error) {
      console.error('메시지 전송 실패:', error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { message: '메시지 전송에 실패했습니다.', isMe: false, isLoading: false }
      ]);
    }
  };

  const handleGuideButtonClick = async () => {
    if (isNaN(chatRoomId)) return;

    try {
      setShowGuideButton(false);

      setMessages(prev => [...prev, { message: '', isMe: false, isLoading: true }]);
      const response = await postAiChat(chatRoomId, { guide: true, content: '' });
      const guideResponse = response?.chats?.map((chat: { content: string }) => chat.content).join('<br>') || '가이드 응답을 불러오지 못했습니다.';

      setMessages(prev => [
        ...prev.slice(0, -1),
        { message: guideResponse, isMe: false, isLoading: false }
      ]);
    } catch (error) {
      console.error('가이드 요청 실패:', error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { message: '가이드 요청에 실패했습니다.', isMe: false, isLoading: false }
      ]);
    }
  };

  const handleTemporarySave = () => {
    if (messages.length > 1) {
      setIsTempSaveModalOpen(true);
    } else {
      navigate(-1);
    }
  };

  const handleSaveAndExit = async () => {
    console.log("임시 저장할 채팅방 ID:", chatRoomId);
    console.log("임시 저장할 마지막 메시지:", messages[messages.length - 1].message); // 마지막 메시지 내용 출력

    try {
      if (!chatRoomId) {
        throw new Error('유효하지 않은 채팅방 ID입니다.');
      }

      await postTmpChat(chatRoomId);
      setShowToast(true);
      console.log("임시 저장 요청 성공");
      setTimeout(() => {
        navigate(-1);
      }, 1000);
    } catch (error) {
      console.error("임시 저장 요청 실패:", error);
      alert('임시 저장에 실패했습니다.');
      navigate(-1);
    }
  };

  const currentDate = new Date().toISOString().split('T')[0].replace(/-/g, '.');

  return (
    <>
      <TabBar rightText="완료하기" onClickBackIcon={handleTemporarySave} onClick={() => setIsModalOpen(true)} isDisabled={messages.length === 0} />
      {isModalOpen && (
        <DetailModal
          text="기록을 완료할까요?"
          leftButtonText="돌아가기"
          rightButtonText="완료하기"
          onClickBackground={() => setIsModalOpen(false)}
          onClickLeft={() => setIsModalOpen(false)}
          onClickRight={() => navigate('/record-complete')}
        />
      )}

      {isLoadTempModalOpen && (
        <DetailModal
          text="최근 작성 내역이 있어요\n이어서 작성하시겠어요?"
          leftButtonText="새로 작성하기"
          rightButtonText="이어서 작성하기"
          onClickLeft={() => {
            setIsLoadTempModalOpen(false);
            // 새로 작성하기를 선택한 경우 기본 메시지로 초기화
            setMessages([{
              message: formattedFirstChat,
              isMe: false,
              isLoading: false,
            }]);
          }}
          onClickRight={async () => {
            try {
              setIsLoadTempModalOpen(false);
              const savedChatRoomId = Number(localStorage.getItem('chatRoomId'));
              console.log('저장된 채팅방 ID로 기록 불러오기 시도:', savedChatRoomId);
              await fetchChatHistory(savedChatRoomId);
            } catch (error) {
              console.error('채팅 기록 불러오기 실패:', error);
            }
          }}
        />
      )}

      {isTempSaveModalOpen && (
        <DetailModal
          text="대화를 임시 저장할까요?"
          leftButtonText="나가기"
          rightButtonText="저장하기"
          onClickLeft={() => navigate(-1)}
          onClickRight={handleSaveAndExit}
        />
      )}

      {showToast && <ToastMessage text="경험이 임시저장 되었어요" onClose={() => setShowToast(false)} />}

      <S.ChatContainer>
        <S.DateContainer>{currentDate}</S.DateContainer>
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.isLoading ? <LoadingDots /> : msg.message} isMe={msg.isMe} isLoading={msg.isLoading} />
        ))}
        <div ref={messagesEndRef} />
        <S.InputContainer>
          {showGuideButton && <GuideButton text="🤔 경험을 어떻게 말해야 할지 모르겠어요" onClick={handleGuideButtonClick} />}
          <ChatBox onSubmit={handleSendMessage} />
        </S.InputContainer>
      </S.ChatContainer>
    </>
  );
};

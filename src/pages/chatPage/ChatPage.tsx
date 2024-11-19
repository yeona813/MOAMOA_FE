import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChatBubble } from '@components/chat/ChatBubble';
import { ChatBox } from '@components/chat/ChatBox';
import { GuideButton } from '@components/chat/GuideButton';
import { TabBar } from '@components/layout/tabBar/TabBar';
import { DetailModal } from '@components/common/modal/DetailModal';
import { useNavigate } from 'react-router-dom';
import * as S from './ChatPage.Style';
import ToastMessage from '@/components/chat/ToastMessage';
import { LoadingDots } from '@components/chat/LodingDots';
import { postAiChat, postTmpChat, checkTmpChat, getChat, getSummary, deleteChat, postChat, CustomError } from '@/api/Chat';

interface Message {
  message: string;
  isMe: boolean;
  isLoading?: boolean;
}

export const ChatPage = () => {
  const firstChat = localStorage.getItem('firstChat') || '안녕하세요! 경험을 작성해주세요.';
  const formattedFirstChat = firstChat.replace(/\n/g, '<br>');
  const { id } = useParams();
  const [chatRoomId, setChatRoomId] = useState<number | null>(null);
  const [tmpChatRoomId, setTmpChatRoomId] = useState<number | null>(null);
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
    if (messages.length > 1) { // 배포 후 모바일에서 확인 필요
      scrollToBottom();
    }
  }, [messages]);

  // URL 파라미터로부터 채팅방 ID 설정
  useEffect(() => {
    if (id) {
      setChatRoomId(Number(id));
    } else {
      handleNewChat();
    }
  }, [id]);

  // 채팅 기록 조회
  useEffect(() => {
    if (chatRoomId !== null) {
      fetchChatHistory(chatRoomId);
    }
  }, [chatRoomId]);

  // 임시 저장된 채팅 기록 조회
  useEffect(() => {
    const fetchTmpChatData = async () => {
      try {
        // review-chat 경로로 접근한 경우에만 임시저장 확인하지 않음
        if (window.location.pathname.includes('review-chat')) return;

        // 임시 저장된 채팅 기록이 있는지 확인
        const tmpChatData = await checkTmpChat();
        if (tmpChatData.exist && tmpChatData.chatRoomId) {
          setTmpChatRoomId(tmpChatData.chatRoomId);
          setIsLoadTempModalOpen(true);
        }
      } catch (error) {
        console.error("임시 저장된 기록을 조회하는 중 오류가 발생했습니다:", error);
      }
    };

    fetchTmpChatData();
  }, [id]);

  const fetchChatHistory = async (chatRoomId: number | null) => {
    try {
      if (!chatRoomId) {
        throw new Error('유효하지 않은 채팅방 ID입니다.');
      }

      if (window.location.pathname.includes('review-chat')) {
        setShowGuideButton(false);
      }
      const response = await getChat(chatRoomId);

      if (response?.chats && response.chats.length > 0) {  // 채팅 기록이 있는 경우만 체크
        // 채팅 기록이 있는 경우
        const chatHistory = response.chats.map(chat => ({
          message: chat.content,
          isMe: (chat.author === 'user') ? true : false,
          isLoading: false
        }));
        setMessages(chatHistory);
      } else {
        // 채팅 기록이 없는 경우
        setMessages([{
          message: formattedFirstChat,
          isMe: false,
          isLoading: false,
        }]);
        setShowGuideButton(true);  // 채팅 기록이 없으면 가이드 버튼 보이기
      }
    } catch (error) {
      // 에러 발생 시 기본 메시지 표시
      setMessages([{
        message: formattedFirstChat,
        isMe: false,
        isLoading: false,
      }]);
      setShowGuideButton(true);
    }
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || chatRoomId === null) {
      alert('채팅방 ID가 설정되지 않았습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

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
      setMessages(prev => [
        ...prev.slice(0, -1),
        { message: '메시지 전송에 실패했습니다.', isMe: false, isLoading: false }
      ]);
    }
  };

  const handleGuideButtonClick = async () => {
    if (chatRoomId === null) return;

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
      setMessages(prev => [
        ...prev.slice(0, -1),
        { message: '가이드 요청에 실패했습니다.', isMe: false, isLoading: false }
      ]);
    }
  };

  const handleTemporarySave = () => {
    const pathname = window.location.pathname;
    if (pathname.includes('review-chat')) {
      navigate(-1);
      return;
    }
    if (messages.length > 1) {
      setIsTempSaveModalOpen(true);
    } else {
      navigate(-1);
    }
  };

  const handleSaveAndExit = async () => {
    try {
      if (!chatRoomId) {
        throw new Error('유효하지 않은 채팅방 ID입니다.');
      }
      // 1. 기존 임시저장 채팅이 있는지 확인
      const tmpChatData = await checkTmpChat();
      // 2. 기존 임시저장 채팅이 있고, 현재 채팅방과 다른 경우 삭제
      if (tmpChatData.exist && tmpChatData.chatRoomId && typeof tmpChatData.chatRoomId === 'number' && tmpChatData.chatRoomId !== chatRoomId) {
        await deleteChat(tmpChatData.chatRoomId);
      }
      // 3. 현재 채팅 임시저장
      await postTmpChat(chatRoomId);
      setShowToast(true);
      navigate('/home');
    } catch (error) {
      navigate(-1);
    }
  };

  const handleDeleteChat = async () => {
    try {
      if (chatRoomId === null) {
        throw new Error('유효하지 않은 채팅방 ID입니다.');
      }
      await deleteChat(chatRoomId);
      navigate('/home');
    } catch (error) {
      throw error;
    }
  };

  const handleComplete = async () => {
    try {
      if (!chatRoomId) throw new Error('유효하지 않은 채팅방 ID입니다.');

      try {
        const response = await getSummary(chatRoomId);
        if (response) {
          navigate('/record-complete', {
            state: { chatRoomId, summary: response.content, title: response.title },
          });
          return;
        }
      } catch (error: any) {
        if (error instanceof CustomError) {
          switch (error.code) {
            case 'E0305_OVERFLOW_SUMMARY_TITLE':
            case 'E0305_OVERFLOW_SUMMARY_CONTENT':
            case 'E0305_INVALID_CHAT_SUMMARY':
              // 1초 대기 후 재시도
              await new Promise((resolve) => setTimeout(resolve, 1000));
              const retryResponse = await getSummary(chatRoomId);

              if (retryResponse) {
                navigate('/record-complete', {
                  state: { chatRoomId, summary: retryResponse.content, title: retryResponse.title },
                });
                return;
              }
              break;
            case 'E0305_NO_RECORD':
              // 내용 부족 에러: 알림 후 종료
              alert('경험 기록의 내용이 충분하지 않습니다. 내용을 더 자세히 작성해주세요.');
              return;
            default:
              throw error; // 예상하지 못한 에러
          }
        } else {
          throw error; // CustomError가 아닌 다른 에러
        }
      }
    } catch (error) {
      console.error(error); // 디버깅용 로그
      alert('완료 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };


  const handleNewChat = async () => {
    try {
      if (chatRoomId !== null) {
        await deleteChat(chatRoomId);
      }
      // 새로운 채팅방 생성
      const newChatData = await postChat();
      if (newChatData?.chatRoomId) {
        setChatRoomId(newChatData.chatRoomId);
      }
      setIsLoadTempModalOpen(false);
      // 새로 작성하기를 선택한 경우 기본 메시지로 초기화
      setMessages([{
        message: formattedFirstChat,
        isMe: false,
        isLoading: false,
      }]);
      setShowGuideButton(true);
    } catch (error) {
      throw error;
    }
  }

  // 임시저장 채팅 계속하기 선택 시
  const handleContinueChat = async () => {
    try {
      setIsLoadTempModalOpen(false);
      if (tmpChatRoomId !== null) {
        setChatRoomId(tmpChatRoomId); // 현재 채팅방 ID 업데이트
        await fetchChatHistory(tmpChatRoomId);
      }
    } catch (error) {
    }
  }

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
          onClickRight={handleComplete}
        />
      )}

      {isLoadTempModalOpen && (
        <DetailModal
          text="최근 작성 내역이 있어요 이어서 작성하시겠어요?"
          leftButtonText="새로 작성하기"
          rightButtonText="이어서 작성하기"
          onClickLeft={handleNewChat}
          onClickRight={handleContinueChat}
        />
      )}

      {isTempSaveModalOpen && (
        <DetailModal
          text="대화를 임시 저장할까요?"
          leftButtonText="나가기"
          rightButtonText="저장하기"
          onClickLeft={handleDeleteChat}
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
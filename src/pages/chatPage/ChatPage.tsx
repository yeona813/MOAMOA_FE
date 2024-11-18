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
import { postAiChat, postTmpChat, checkTmpChat, getChat, getSummary, deleteChat, postChat } from '@/api/Chat';

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
    scrollToBottom();
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
          setShowGuideButton(false);
        }
      } else {
        setMessages([{ message: '채팅 기록을 불러오지 못했습니다.', isMe: false }]);
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
      console.error('메시지 전송 실패:', error);
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
      console.error('가이드 요청 실패:', error);
      setMessages(prev => [
        ...prev.slice(0, -1),
        { message: '가이드 요청에 실패했습니다.', isMe: false, isLoading: false }
      ]);
    }
  };

  const handleTemporarySave = () => {
    const pathname = window.location.pathname;
    // URL 파라미터(id)가 있는 경우 (리뷰 모드) 바로 뒤로가기
    // if (id) {
    //   navigate(-1);
    //   return;
    // }
    // review-chat 경로로 접근한 경우 (리뷰 모드)
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
    console.log("임시 저장할 채팅방 ID:", chatRoomId);
    console.log("임시 저장할 마지막 메시지:", messages[messages.length - 1].message); // 마지막 메시지 내용 출력

    try {
      if (!chatRoomId) {
        throw new Error('유효하지 않은 채팅방 ID입니다.');
      }
      // 1. 기존 임시저장 채팅이 있는지 확인
      const tmpChatData = await checkTmpChat();
      // 2. 기존 임시저장 채팅이 있고, 현재 채팅방과 다른 경우 삭제
      if (tmpChatData.exist && tmpChatData.chatRoomId && typeof tmpChatData.chatRoomId === 'number' && tmpChatData.chatRoomId !== chatRoomId) {
        await deleteChat(tmpChatData.chatRoomId);
        console.log('기존 임시저장 채팅 삭제 성공');
      }
      // 3. 현재 채팅 임시저장
      await postTmpChat(chatRoomId);
      setShowToast(true);
      console.log("임시 저장 요청 성공");
      navigate('/home');
    } catch (error) {
      console.error("임시 저장 요청 실패:", error);
      alert('임시 저장에 실패했습니다.');
      navigate(-1);
    }
  };

  const handleDeleteChat = async () => {
    try {
      console.log('삭제할 채팅방 ID:', chatRoomId);
      if (chatRoomId === null) {
        throw new Error('유효하지 않은 채팅방 ID입니다.');
      }
      await deleteChat(chatRoomId);
      console.log('채팅 삭제 성공');
      navigate('/home');
    } catch (error) {
      console.error('채팅 삭제 실패:', error);
      alert('채팅 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // const handleComplete = async () => {
  //   try {
  //     if (!chatRoomId) {
  //       throw new Error('유효하지 않은 채팅방 ID입니다.');
  //     }
  //     try {

  //       const response = await getSummary(chatRoomId);
  //       console.log('요약 응답:', response);

  //       if (!response) {
  //         throw new Error('채팅 기록 요약에 실패했습니다.');
  //       }

  //       navigate('/record-complete', {
  //         state: {
  //           chatRoomId,
  //           summary: response.content,
  //           title: response.title
  //         }
  //       });

  //     } catch (error: any) {
  //       if (error.message === '경험 기록의 내용이 충분하지 않습니다.') {
  //         alert('경험을 더 자세히 설명해주세요.');
  //       } else {
  //         alert('채팅 기록 요약에 실패했습니다. 다시 시도해주세요.');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('채팅 기록 저장 실패:', error);
  //     alert('채팅 기록 저장에 실패했습니다. 다시 시도해주세요.');
  //   }
  // };
  const handleComplete = async () => {
    try {
      if (!chatRoomId) throw new Error('유효하지 않은 채팅방 ID입니다.');

      try {
        const response = await getSummary(chatRoomId);
        console.log('요약 응답:', response);

        if (response) {
          navigate('/record-complete', {
            state: { chatRoomId, summary: response.content, title: response.title },
          });
          return; // 성공 시 종료
        }
      } catch (error: any) {
        console.error('요약 요청 실패:', error);

        if (
          error.message.includes('제목은 50자 이내여야 합니다') ||
          error.message.includes('경험 요약 내용은 500자 이내여야 합니다') ||
          error.message.includes('채팅 경험 요약 파싱 중 오류가 발생했습니다')
        ) {
          console.warn('재요청 가능한 에러 발생. 재요청을 진행합니다.');
          await new Promise((resolve) => setTimeout(resolve, 1000));

          const retryResponse = await getSummary(chatRoomId);
          console.log('재요청 응답:', retryResponse);

          if (retryResponse) {
            navigate('/record-complete', {
              state: { chatRoomId, summary: retryResponse.content, title: retryResponse.title },
            });
            return;
          }
        } else if (error.message.includes('경험 기록의 내용이 충분하지 않습니다')) {
          alert('경험 기록의 내용이 충분하지 않습니다. 내용을 더 자세히 작성해주세요.');
          return; // 더 이상 재요청하지 않고 종료
        } else {
          throw error;
        }
      }
    } catch (error) {
      console.error('완료 처리 중 실패:', error);
      alert('완료 처리 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  const handleNewChat = async () => {
    try {
      if (chatRoomId !== null) {
        await deleteChat(chatRoomId);
        console.log('임시 저장된 채팅방 삭제 성공');
      }
      // 새로운 채팅방 생성
      const newChatData = await postChat();
      if (newChatData?.chatRoomId) {
        setChatRoomId(newChatData.chatRoomId);
        console.log('새로운 채팅방 생성 성공:', newChatData.chatRoomId);
      }
      setIsLoadTempModalOpen(false);
      // 새로 작성하기를 선택한 경우 기본 메시지로 초기화
      setMessages([{
        message: formattedFirstChat,
        isMe: false,
        isLoading: false,
      }]);
    } catch (error) {
      console.error('임시 저장된 채팅방 삭제 실패 또는 새로운 채팅방 생성 실패:', error);
    }
  }

  // 임시저장 채팅 계속하기 선택 시
  const handleContinueChat = async () => {
    try {
      setIsLoadTempModalOpen(false);
      if (tmpChatRoomId !== null) {
        console.log('저장된 채팅방 ID로 임시 저장 기록 불러오기 시도:', tmpChatRoomId);
        setChatRoomId(tmpChatRoomId); // 현재 채팅방 ID 업데이트
        await fetchChatHistory(tmpChatRoomId);
      }
    } catch (error) {
      console.error('채팅 기록 불러오기 실패:', error);
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
          text="최근 작성 내역이 있어요\n이어서 작성하시겠어요?"
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
import { useState, useRef, useEffect } from 'react';
import { ChatBubble } from '@components/chat/ChatBubble';
import { ChatBox } from '@components/chat/ChatBox';
import { GuideButton } from '@components/chat/GuideButton';
import { TabBar } from '@components/layout/tabBar/TabBar';
import { DetailModal } from '@components/common/modal/DetailModal';
import { useNavigate } from 'react-router-dom';
import * as S from './ChatPage.Style';
import ToastMessage from '@/components/chat/ToastMessage';

interface Message {
  message: string;
  isMe: boolean;
}

export const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      message: '안녕하세요! 뫄뫄님 오늘은 어떤 경험을 했나요? 저와 함께 정리해보아요!',
      isMe: false,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false); // 완료 모달 상태
  const [isTempSaveModalOpen, setIsTempSaveModalOpen] = useState(false); // 뒤로 가기 시 임시 저장 모달 상태
  const [isLoadTempModalOpen, setIsLoadTempModalOpen] = useState(false); // 페이지 로드시 임시 저장 데이터 불러오기 모달 상태
  const [showToast, setShowToast] = useState(false);
  const [tempChat, setTempChat] = useState<Message[]>([
    { message: '안녕', isMe: true },
    { message: '이어서 진행하고 싶은 경험을 말씀해주세요.', isMe: false },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 페이지 접속 시 임시 저장 데이터 불러오기 모달을 띄우기
  useEffect(() => {
    if (tempChat.length > 0) {
      setIsLoadTempModalOpen(true);
    }
  }, []);

  // 메시지 전송 함수
  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { message, isMe: true }]);

    // AI 응답 시뮬레이션 (실제로는 API 호출로 대체)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          message: '더 자세히 설명해주실 수 있나요?',
          isMe: false,
        },
      ]);
    }, 500);
  };

  // 임시 저장 모달에서 "새로 작성하기" 선택 시
  const handleNewChat = () => {
    setTempChat([]); // 임시 저장 데이터 초기화
    setIsLoadTempModalOpen(false); // 모달 닫기
  };

  // 임시 저장 모달에서 "이어서 작성하기" 선택 시
  const handleContinueChat = () => {
    setMessages([...messages, ...tempChat]); // 임시 저장된 데이터를 현재 메시지로 불러오기
    setTempChat([]); // 임시 저장 데이터 초기화
    setIsLoadTempModalOpen(false); // 모달 닫기
  };

  // 탭바 뒤로 가기 버튼 클릭 시 임시 저장 모달 열기
  const handleTemporarySave = () => {
    if (messages.length > 1) {
      // 환영 메시지 외에 채팅이 있는지 확인
      setIsTempSaveModalOpen(true);
    } else {
      navigate(-1); // 작성된 메시지가 없으면 바로 나가기
    }
  };

  // 뒤로 가기 임시 저장 모달에서 "저장하기" 선택 시
  const handleSaveAndExit = () => {
    setTempChat(messages); // 현재 메시지를 임시 저장
    setIsTempSaveModalOpen(false); // 모달 닫기
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate(-1); // 2초 후 페이지 이동
    }, 2000);
  };

  // 완료 버튼 클릭 시 모달 열기
  const handleComplete = () => {
    setIsModalOpen(true);
    navigate('/record-complete');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeTempSaveModal = () => {
    setIsTempSaveModalOpen(false);
    navigate(-1);
  };

  const currentDate = new Date().toISOString().split('T')[0].replace(/-/g, '.');

  return (
    <>
      <TabBar rightText="완료하기" onClickBackIcon={handleTemporarySave} onClick={handleComplete} />
      <S.DateContainer>{currentDate}</S.DateContainer>
      {/* 경험 기록 완료 모달 */}
      {isModalOpen && (
        <DetailModal
          text="경험 기록을 완료할까요?"
          leftButtonText="돌아가기"
          rightButtonText="완료하기"
          onClickBackground={closeModal}
          onClickLeft={closeModal}
          onClickRight={handleComplete}
        />
      )}

      {/* 페이지 접속 시 임시 저장 데이터 불러오기 모달 */}
      {isLoadTempModalOpen && (
        <DetailModal
          text={`최근 작성 내역이 있어요\n이어서 작성하시겠어요?`}
          leftButtonText="새로 작성하기"
          rightButtonText="이어서 작성하기"
          onClickLeft={handleNewChat}
          onClickRight={handleContinueChat}
        />
      )}

      {/* 뒤로 가기 시 임시 저장 여부를 묻는 모달 */}
      {isTempSaveModalOpen && (
        <DetailModal
          text={`작성 중인 레코드를\n임시 저장할까요?`}
          leftButtonText="나가기"
          rightButtonText="저장하기"
          onClickLeft={closeTempSaveModal}
          onClickRight={handleSaveAndExit}
        />
      )}

      {showToast && (
        <ToastMessage text="경험이 임시저장 되었어요" onClose={() => setShowToast(false)} />
      )}

      <S.ChatContainer>
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.message} isMe={msg.isMe} />
        ))}
        <div ref={messagesEndRef} />
        <S.InputContainer>
          <GuideButton text="어떤 경험을 말해야 할지 모르겠어요." onClick={() => { }} />
          <ChatBox onSubmit={handleSendMessage} />
        </S.InputContainer>
      </S.ChatContainer>
    </>
  );
};

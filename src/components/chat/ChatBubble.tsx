import ChatProfileIcon from '@icons/ChatProfileIcon.svg';
import * as S from './ChatBubble.Style';

interface ChatBubbleProps {
  message: string;
  isMe: boolean;
}

export const ChatBubble = ({ message, isMe }: ChatBubbleProps) => {
  return (
    <S.ChatBubbleWrapper $isMe={isMe}>
      {!isMe && <S.ProfileIcon src={ChatProfileIcon} alt="Profile" />}
      <S.Bubble $isMe={isMe}>
        <S.Message>{message}</S.Message>
      </S.Bubble>
    </S.ChatBubbleWrapper>
  );
};

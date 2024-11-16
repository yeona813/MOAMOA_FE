import ChatProfileIcon from '@icons/ChatProfileIcon.svg';
import { LoadingDots } from './LodingDots';
import * as S from './ChatBubble.Style';

interface ChatBubbleProps {
  message: string | React.ReactNode;
  isMe: boolean;
  isLoading?: boolean;
}

export const ChatBubble = ({ message, isMe, isLoading }: ChatBubbleProps) => {
  return (
    <S.ChatBubbleWrapper $isMe={isMe}>
      {!isMe && <S.ProfileIcon src={ChatProfileIcon} alt="Profile" />}
      <S.Bubble $isMe={isMe}>
        {isLoading ? (
          <LoadingDots />
        ) : (
          typeof message === 'string' ? (
            <S.Message dangerouslySetInnerHTML={{ __html: message }} />
          ) : (
            <S.Message>{message}</S.Message>
          )
        )}
      </S.Bubble>
    </S.ChatBubbleWrapper>
  );
};

import ChatProfileIcon from '@icons/ChatProfileIcon.svg';
import { LoadingDots } from './LodingDots';
import * as S from './ChatBubble.Style';

interface ChatBubbleProps {
  message: string | React.ReactNode;
  isMe: boolean;
  isLoading?: boolean;
  $isPC?: boolean;
}

export const ChatBubble = ({ message, isMe, isLoading, $isPC }: ChatBubbleProps) => {
  return (
    <S.ChatBubbleWrapper $isMe={isMe} $isPC={$isPC}>
      {!isMe && <S.ProfileIcon src={ChatProfileIcon} alt="Profile" />}
      <S.Bubble $isMe={isMe} $isPC={$isPC}>
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

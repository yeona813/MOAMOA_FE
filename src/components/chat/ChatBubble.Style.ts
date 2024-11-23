import styled from 'styled-components';
import { Colors } from '@/styles/colors';

interface ChatBubbleProps {
  $isMe: boolean;
  $isPC?: boolean;
}

export const ChatBubbleWrapper = styled.div<ChatBubbleProps>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ $isMe }) => ($isMe ? 'flex-end' : 'flex-start')};
`;

export const Bubble = styled.div<ChatBubbleProps>`
  max-width: ${({ $isMe, $isPC }) =>
    $isMe && $isPC ? '27rem' : !$isMe && $isPC ? '24.875rem' : $isMe ? '15.75rem' : '14.5rem'};
  padding: 0.75rem 1rem;
  border-radius: ${({ $isMe }) =>
    $isMe ? '1.25rem 0 1.25rem 1.25rem' : '0 1.25rem 1.25rem 1.25rem'};
  background-color: ${({ $isMe }) => ($isMe ? Colors.blue50 : Colors.white)};
  gap: 0.625rem;
  border: 1px solid ${({ $isMe }) => ($isMe ? Colors.blue100 : Colors.gray50)};
  margin-bottom: 0.625rem;
`;

export const Message = styled.p<ChatBubbleProps>`
  font-size: ${({ $isPC }) => ($isPC ? '1.125rem' : '0.875rem')};
  font-weight: 400;
  line-height: 1.25rem;
  white-space: pre-line;
`;

export const ProfileIcon = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.3125rem;
`;

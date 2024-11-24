import styled, { keyframes } from 'styled-components';
import { Colors } from '@/styles/colors';

interface ChatBubbleProps {
  $isMe: boolean;
  $isPC?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ChatBubbleWrapper = styled.div<ChatBubbleProps>`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ $isMe }) => ($isMe ? 'flex-end' : 'flex-start')};
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const Bubble = styled.div<ChatBubbleProps>`
  max-width: ${({ $isMe }) => ($isMe ? '15.75rem' : '14.5rem')};
  padding: 0.75rem 1rem;
  border-radius: ${({ $isMe }) =>
    $isMe ? '1.25rem 0 1.25rem 1.25rem' : '0 1.25rem 1.25rem 1.25rem'};
  background-color: ${({ $isMe }) => ($isMe ? Colors.blue50 : Colors.white)};
  gap: 0.625rem;
  border: 1px solid ${({ $isMe }) => ($isMe ? Colors.blue100 : Colors.gray50)};
  margin-bottom: 0.625rem;

  ${(props) => props.theme.breakpoints.min} {
    max-width: 27rem;
  }
`;

export const Message = styled.p<ChatBubbleProps>`
  font-size: 1rem;
  font-weight: 400;
  line-height: 143.75%;
  white-space: pre-line;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.125rem;
    line-height: 163.125%;
  }
`;

export const ProfileIcon = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.3125rem;
`;

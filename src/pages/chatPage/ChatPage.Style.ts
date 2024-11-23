import { Colors } from '@/styles/colors';
import styled from 'styled-components';

interface ChatContainerProps {
  $isPC: boolean;
}

export const ChatContainer = styled.div<ChatContainerProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
  padding-bottom: 3.5rem;
  overflow-y: auto;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(164, 176, 255, 0.2) 100%
  );

  ${(props) => props.theme.breakpoints.min} {
      padding-bottom: 5rem;
  }
`;

export const DateContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0.7rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${Colors.gray700};
  line-height: 145%;
`;

export const InputContainer = styled.div<ChatContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${({ $isPC }) => ($isPC ? '47.75rem' : '100%')};
  margin: 0 auto;
  margin-bottom: ${({ $isPC }) => ($isPC ? '1.25rem' : '0')};
`;

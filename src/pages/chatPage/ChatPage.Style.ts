import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 54px);
  margin-top: 54px;
  padding: 1rem;
  overflow-y: auto;
    background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(164, 176, 255, 0.2) 100%
  );
`;

export const InputContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%
`;

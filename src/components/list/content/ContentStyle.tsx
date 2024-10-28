import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 11.625rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 17.25rem);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 1.25rem 0rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

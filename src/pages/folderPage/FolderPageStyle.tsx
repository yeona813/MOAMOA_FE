import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 6.375rem;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 6.375rem);
  padding: 1.5rem 1.75rem 6.625rem 1.75rem;
  gap: 10px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 8.8125rem;
  left: 0;
  width: 100%;
  height: calc(100vh - 8.8125rem);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem 1.25rem 6.625rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.5625rem;
  gap: 1.25rem;
`;

// 여기 바뀌어야함 아직 디자인 중인 것으로 알고 있음
export const Empty = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background-color: ${({ theme }) => theme.colors.blue100};
  border-radius: 62.4375rem;
  margin-bottom: 0.625rem;
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 0.875rem;
  line-height: 145%;
  text-align: center;
`;

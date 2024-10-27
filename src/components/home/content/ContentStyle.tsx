import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 13.875rem;
  right: 0;
  width: 100%;
  height: calc(100vh - 13.875rem); // 고민되는 부분임!!(홈 페이지에서 논의 후 주석 제거 예정)
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 1.25rem 0rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 1.125rem;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
`;

export const Plus = styled.p`
  font-size: 0.75rem;
  line-height: 145%;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

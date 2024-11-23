import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
`;

export const StoreText = styled.h6<{ $hasChanges: boolean }>`
  color: ${({ $hasChanges, theme }) => ($hasChanges ? theme.colors.blue500 : theme.colors.gray300)};
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const Title = styled.h6`
  color: ${({ theme }) => theme.colors.gray900};
  line-height: 140%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.3125rem;
  max-height: calc(100vh - 15rem);
  gap: 1.25rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) => props.theme.breakpoints.min} {
    max-height: 25rem;
    height: 100%;
  }
`;

export const Keyword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ErrorMessage = styled.p`
  margin-bottom: -0.25rem;
  color: #f00;
  font-size: 0.75rem;
  line-height: 130%;
`;

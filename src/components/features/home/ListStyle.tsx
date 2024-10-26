import styled from 'styled-components';

export const List = styled.section`
  display: flex;
  width: 100%;
  height: 7.125rem;
  gap: 0.875rem;
  color: ${({ theme }) => theme.colors.gray900};
  padding: 0.6875rem 1.5rem 0.6875rem 0.4375rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.div`
  width: 0.4375rem;
  height: 100%;
  background-image: url('/icons/CirclesIcon.svg');
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;

export const FolderText = styled.span`
  font-size: 0.75rem;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const DateText = styled.p`
  font-size: 0.6875rem;
`;

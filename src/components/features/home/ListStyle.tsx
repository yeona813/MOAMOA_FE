import styled from 'styled-components';

export const List = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 7.125rem;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray900};
  background: url('/icons/HomeList.svg') no-repeat;
  background-size: cover;
  padding: 0.6875rem 1.9375rem;
  cursor: pointer;
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

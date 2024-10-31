import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5.3125rem 2rem 6.875rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  color: ${({ theme }) => theme.colors.gray900};
`;

export const Title = styled.h4`
  line-height: 135%;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 100%;
`;

export const KeywordListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.625rem;
  width: 100%;
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
  padding-top: 7.75rem;
  gap: 1.375rem;
`;

export const EmptyMessage = styled.p`
  font-size: 0.875rem;
  line-height: 145%;
  text-align: center;
`;

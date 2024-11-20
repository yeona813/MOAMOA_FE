import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 13.125rem);
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  color: ${({ theme }) => theme.colors.gray900};

  ${(props) => props.theme.breakpoints.min} {
    padding: 1.25rem 4.75rem;
  }
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  width: 100%;

  ${(props) => props.theme.breakpoints.min} {
    gap: 0.75rem;
  }
`;

export const KeywordListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) => props.theme.breakpoints.min} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

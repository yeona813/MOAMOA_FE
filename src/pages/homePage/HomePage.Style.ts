import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.gray25};
    gap: 1.875rem;
    padding: 0rem 4.75rem 1.25rem;
  }
`;

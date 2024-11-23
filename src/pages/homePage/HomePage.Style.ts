import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: ${({ theme }) => theme.colors.gray25};
    gap: 1.875rem;
    padding: 0rem 4.75rem 1.25rem;
  }
`;

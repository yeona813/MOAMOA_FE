import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 5rem 12.3125rem 0rem;
  }
`;

export const MobileHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 0rem 1.25rem;
  height: 3.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};

  ${(props) => props.theme.breakpoints.min} {
    display: none;
  }
`;

export const PcHeader = styled.h2`
  line-height: 140%;
  ${(props) => props.theme.breakpoints.max} {
    display: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 3.75rem);
  background-color: #f5f5f5;
  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    height: auto;
    gap: 5rem;
  }
`;

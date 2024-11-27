import styled from 'styled-components';

export const TabBarContainer = styled.div`
  ${(props) => props.theme.breakpoints.min} {
    display: none;
  }
`;

export const Content = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 3.5rem);
  width: 100%;
  padding: 1.75rem 1.25rem;

  ${(props) => props.theme.breakpoints.min} {
    justify-content: flex-start;
    gap: 2.8125rem;
    margin-top: 5rem;
    padding: 0rem 4.75rem;
    height: auto;
  }
`;

export const Title = styled.h2`
  line-height: 135%;

  ${(props) => props.theme.breakpoints.max} {
    display: none;
  }
`;

export const ButtonStyle = styled.div`
  ${(props) => props.theme.breakpoints.min} {
    width: 11.0625rem;
    position: absolute;
    bottom: 2.5rem;
    left: 60rem;
  }
`;

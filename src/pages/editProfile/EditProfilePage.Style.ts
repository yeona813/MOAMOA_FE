import styled from 'styled-components';

export const Content = styled.div`
  position: absolute;
  top: 3.75rem;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 3.75rem);
  padding: 1.75rem 1.25rem;
<<<<<<< Updated upstream
`;

export const ButtonStyle = styled.div`
  width: calc(100% - 2.5rem);
  position: absolute;
  bottom: 2.5rem;
  left: 1.25rem;
=======

  ${(props) => props.theme.breakpoints.min} {
    justify-content: flex-start;
    gap: 2.8125rem;
    margin-top: 5rem;
    padding: 0rem 12.3125rem;
    height: auto;
  }
`;

export const Title = styled.h3`
  line-height: 135%;

  ${(props) => props.theme.breakpoints.max} {
    display: none;
  }
`;

export const ButtonStyle = styled.div`
  ${(props) => props.theme.breakpoints.min} {
    width: 11.0625rem;
    position: absolute;
    top: 38rem;
    left: 70rem;
  }
>>>>>>> Stashed changes
`;

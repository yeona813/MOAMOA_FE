import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 18rem 2rem 1.25rem;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(164, 176, 255, 0.2) 100%
  );
  text-align: center;
`;

export const Logo = styled.p`
  font-family: ${(props) => props.theme.fonts.montserratAlternatesBold};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 2.5rem;
`;

export const Spinner = styled.div`
  position: relative;
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Label = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;

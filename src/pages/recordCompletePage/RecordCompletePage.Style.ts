import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1.25rem;
`;

export const Title = styled.h4`
  margin-top: 1.25rem;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h6`
  margin-bottom: 1.00rem;
  margin-top: 1.25rem;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 3.125rem;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
`;

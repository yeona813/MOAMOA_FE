import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  position: relative;
  width: 100%;
  height: 100vh;
  margin-top: 60px;
`;

export const Label = styled.h6`
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 0.625rem;
  margin-top: 0.625rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  width: 100%;
  padding: 0 1.25rem;
`;

export const InputContainer = styled.div`
  margin-bottom: 1.25rem;
`;

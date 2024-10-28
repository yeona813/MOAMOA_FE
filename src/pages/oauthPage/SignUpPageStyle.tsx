import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  padding: 0 20px;
  margin: 0 20px 0 20px;
  align-items: center;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;

`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 23.53px 0 40px 0;
  text-align: left;
  width: 100%;
  padding-left: 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;  
  width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 1.575rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 10px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  margin-top: auto;
  margin-bottom: 2.5313rem;
  width: 100%;
`;
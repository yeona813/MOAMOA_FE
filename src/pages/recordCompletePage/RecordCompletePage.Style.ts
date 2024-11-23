import styled from 'styled-components';
import { Input as OriginalInput } from '@/components/common/input/Input';

interface RecordCompletePageProps {
  $isPC: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  position: relative;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 12.6875rem;
  background-image: url('/images/HeaderImage.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  margin-top: 6rem;
  margin-bottom: 0.75rem;
  margin-left: 3rem;
`;

export const SubTitle = styled.h6`
  line-height: 140%;
  margin-bottom: 1rem;
  margin-left: 3rem;
  white-space: pre-line;
`;

export const Form = styled.form<RecordCompletePageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.625rem;
  width: ${({ $isPC }) => ($isPC ? '80%' : '100%')};
  padding: 0 1.25rem;
  position: relative;
`;

export const InputTitle = styled(OriginalInput)`
  width: 95%;
  margin-bottom: 0rem;
  font-weight: 400;
  border: none;
  &:focus {
    border: none;
  }
`;

export const Line = styled.div`
  width: 95%;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray50};
  align-self: center;
  margin-bottom: 0.625rem;
`;

export const TextArea = styled.textarea<RecordCompletePageProps>`
  font-family: 'Pretendard';
  font-size: ${({ $isPC }) => ($isPC ? '1.125rem' : '1rem')};
  font-weight: 400;
  line-height: 145%;
  width: 95%;
  min-height: ${({ $isPC }) => ($isPC ? '15rem' : '10rem')};
  height: ${({ $isPC }) => ($isPC ? '20rem' : '100%')};
  border: none;
  outline: none;
  padding: 0.5rem;
  resize: none;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  font-weight: 400;
  line-height: 145%;
  margin-left: 0.5rem;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const ButtonWrapper = styled.div<RecordCompletePageProps>`
  width: ${({ $isPC }) => ($isPC ? '176px' : '100%')};
  margin-top: ${({ $isPC }) => ($isPC ? '5rem' : '2rem')};
  margin-bottom: 1.25rem;
  margin-left: ${({ $isPC }) => ($isPC ? 'auto' : '0')};
`;

export const Icon = styled.svg`
  width: 38px;
  height: 38px;
`;

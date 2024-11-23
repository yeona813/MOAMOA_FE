import styled from 'styled-components';
import { Input as OriginalInput } from '@components/common/input/Input';

interface ReviewModeProps {
  $isReviewMode: boolean;
  $isPC: boolean;
}

export const Container = styled.div<ReviewModeProps>`
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
  height: 14.5rem;
  background-image: url('/images/HeaderImage.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form<ReviewModeProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.625rem;
  width: ${({ $isPC }) => ($isPC ? '80%' : '100%')};
  padding: 0 1.25rem;
  position: relative;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const BackButton = styled.button`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  top: 2.8125rem;
  left: 1.25rem;
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 200;
  line-height: 135%;
  margin-top: 125px;
  margin-left: 1.25rem;
  white-space: pre-wrap;
`;

export const SubTitle = styled.h4`
  line-height: 135%;
  margin-left: 1.25rem;
  white-space: pre-wrap;
`;

export const Label = styled.p<ReviewModeProps>`
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  font-weight: 600;
  line-height: 145%;
  ${({ $isReviewMode }) => $isReviewMode && 'display: none;'}
`;

export const InputTitle = styled(OriginalInput)`
  width: 100%;
  margin-bottom: 0rem;
  border: none;
  background-color: ${({ disabled }) => (disabled ? 'white' : 'inherit')};
  &:focus {
    border: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray50};
  align-self: center;
  margin-bottom: 0.625rem;
`;

export const Content = styled.textarea<ReviewModeProps>`
  font-family: 'Pretendard';
  font-size: ${({ $isPC }) => ($isPC ? '1.125rem' : '1rem')};
  font-weight: 400;
  line-height: 145%;
  width: 95%;
  min-height: ${({ $isReviewMode }) => ($isReviewMode ? '15rem' : '10rem')};
  height: ${({ $isPC }) => ($isPC ? '20rem' : '100%')};
  border: none;
  outline: none;
  padding: 0.5rem;
  resize: none;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: ${({ disabled }) => (disabled ? 'white' : 'inherit')};

  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray200};
    font-size: 1rem;
    font-weight: 400;
    line-height: 145%;
  }
`;

export const WarningCountContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Warning = styled.p`
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;
  color: #ff4d4d;
  margin-left: 0.625rem;
`;

export const Count = styled.p`
  width: 3.125rem;
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const ButtonWrapper = styled.div<ReviewModeProps>`
  width: ${({ $isPC }) => ($isPC ? '176px' : '100%')};
  margin-top: ${({ $isPC }) => ($isPC ? '5rem' : '2rem')};
  margin-bottom: 1.25rem;
  margin-left: ${({ $isPC }) => ($isPC ? 'auto' : '0')};
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
`;

export const Icon = styled.svg`
  width: 38px;
  height: 38px;
`;

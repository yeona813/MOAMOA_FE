import styled from 'styled-components';
import { Input as OriginalInput } from '@/components/common/input/Input';
import { Colors } from '@/styles/colors';

interface RecordCompletePageProps {
  $isPC: boolean;
}

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Container = styled.div<RecordCompletePageProps>`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  position: relative;
  height: 100%;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  ${(props) => props.theme.breakpoints.min} {
    width: 60%;
  }
`;

export const HeaderContainer = styled.div`
  height: 14.5rem;
  background-image: url('/images/HeaderImage.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.theme.breakpoints.min} {
    background-image: none;
    margin-top: 2rem;
  }
`;

export const HeaderIcon = styled.div`
${(props) => props.theme.breakpoints.min} {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  img {
    width: 200px;
    height: 100px;
  }
}
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  ${(props) => props.theme.breakpoints.min} {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.h4`
  margin-top: 6rem;
  margin-bottom: 0.75rem;
  margin-left: 2rem;

  ${(props) => props.theme.breakpoints.min} {
    margin-left: 3rem;
  }
`;

export const SubTitle = styled.h6`
  line-height: 140%;
  font-weight: 500;
  margin-bottom: 1rem;
  margin-left: 2rem;
  white-space: pre-line;

  ${(props) => props.theme.breakpoints.min} {
    margin-left: 3rem;
  }
`;

export const Form = styled.form<RecordCompletePageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.625rem;
  width: 100%;
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
  ${(props) => props.theme.breakpoints.min} {
    margin-left: 1rem;
  }
`;

export const Line = styled.div`
  width: 95%;
  border: 0.0625rem solid ${Colors.gray50};
  align-self: center;
  margin-bottom: 0.625rem;
`;

export const TextArea = styled.textarea<RecordCompletePageProps>`
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: 400;
  line-height: 145%;
  width: 95%;
  min-height: 10rem;
  height: 100%;
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
  ${(props) => props.theme.breakpoints.min} {
    margin-left: 1rem;
    font-size: 1.125rem;
    min-height: 15rem;
    height: 20rem;
  }
`;

export const Label = styled.p`
  color: ${Colors.gray900};
  font-size: 1rem;
  font-weight: 400;
  line-height: 145%;
  margin-left: 0.5rem;
  ${(props) => props.theme.breakpoints.min} {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  ${(props) => props.theme.breakpoints.min} {
    margin-left: 1.5rem;
  }
`;

export const ButtonWrapper = styled.div<RecordCompletePageProps>`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  margin-left: 0;

  ${(props) => props.theme.breakpoints.min} {
    margin-top: 5rem;
    margin-left: auto;
    width: 11rem;
  }
`;

export const Icon = styled.svg`
  width: 38px;
  height: 38px;
`;

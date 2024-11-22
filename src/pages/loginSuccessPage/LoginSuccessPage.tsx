import { Button } from '@components/common/button/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginSuccessPage.Style';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const LoginSuccessPage = () => {
  const navigate = useNavigate();
  const isPC = useMediaQuery('(min-width: 768px)');

  const handleStart = () => {
    navigate('/home');
  };

  return (
    <S.Container isPC={isPC}>
      <S.ContentWrapper>
        <S.Logo>MOAMOA</S.Logo>
        <S.WelcomeMessage>
          회원가입 완료!
          <br />
          모아모아에 오신 것을 환영합니다.
        </S.WelcomeMessage>
        <S.ColoredSquare />
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <Button styleType="basic" onClick={handleStart}>
          완료
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

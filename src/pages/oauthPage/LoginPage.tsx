import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from '../../components/common/login/LoginButton';
import * as S from './LoginPageStyle';

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 로드 시 자동 로그인 시도
    const accessToken = localStorage.getItem('accessToken');
    console.log('InitialLogin - accessToken 확인:', accessToken);
    if (accessToken) {
      console.log('토큰 존재, oauth 페이지로 이동');
      navigate('/oauth'); // OauthPage에서 자동 로그인 처리
    }
  }, [navigate]);

  const handleOauth = () => {
    console.log('handleOauth called');
    window.location.href = 'https://api.corecord.site/oauth2/authorization/kakao';
  };

  return (
    <S.Container>
      <S.Logo>co:record</S.Logo>
      <S.Subtitle>
        차곡차곡 쌓여가는<br />
        나의 하나뿐인 커리어 기록<br />
      </S.Subtitle>
      <S.ButtonWrapper>
        <LoginButton onClick={handleOauth} />
      </S.ButtonWrapper>
    </S.Container>
  );
};
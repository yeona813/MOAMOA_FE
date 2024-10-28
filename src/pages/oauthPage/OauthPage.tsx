import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTokensWithTmpToken, getUserInfo } from '../../api/Oauth';

export const OauthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 디버깅을 위한 로그
    console.log('1. OauthPage 마운트');
    console.log('2. 현재 location:', location);

    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');
    const isNewUser = urlParams.get('register') === 'true';

    console.log('3. URL 파라미터:', { token, isNewUser });

    if (!token) {
      console.log('4-1. 토큰 없음');
      navigate('/login');
      return;
    }

    if (isNewUser) {
      console.log('4-2. 신규 사용자');
      handleRegister(token);
    } else {
      console.log('4-3. 기존 사용자');
      handleLogin(token);
    }
  }, [location, navigate]);

  const handleLogin = async (tmpToken: string) => {
    try {
      console.log('5. 로그인 처리 시작:', tmpToken);

      const tokenResponse = await getTokensWithTmpToken(tmpToken);
      console.log('6. 토큰 응답:', tokenResponse);

      localStorage.setItem('accessToken', tokenResponse.accessToken);
      console.log('7. accessToken 저장 완료');

      const userInfo = await getUserInfo(tokenResponse.accessToken);
      console.log('8. 사용자 정보:', userInfo);

      navigate('/login-success');
    } catch (error) {
      console.error('9. 로그인 실패:', error);
      navigate('/login');
    }
  };

  const handleRegister = async (registerToken: string) => {
    try {
      console.log('5. 회원가입 처리 시작:', registerToken);
      navigate('/register', { state: { token: registerToken } });
    } catch (error) {
      console.error('회원가입 처리 실패:', error);
      navigate('/login');
    }
  };

  return <div>로그인 처리 중...</div>;
};
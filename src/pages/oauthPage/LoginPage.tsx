// import { useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { makeApiRequestWithTmpToken } from '../../api/Oauth';
// import { LoginButton } from '../../components/common/button/LoginButton';

// export const LoginPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const tmpToken = new URLSearchParams(location.search).get('tmpToken');
//     if (tmpToken) {
//       handleLogin(tmpToken);
//     }
//   }, [location]);

//   const handleLogin = async (tmpToken: string) => {
//     try {
//       // API 요청 예시
//       const apiResponse = await makeApiRequestWithTmpToken(tmpToken);
//       console.log('API Response:', apiResponse);

//       // 로그인 성공 후 홈 페이지로 리다이렉트
//       navigate('/home');
//     } catch (error) {
//       console.error('Login failed:', error);
//       // 에러 처리 (예: 에러 메시지 표시)
//     }
//   };

//   return (
//     <div>
//       <LoginButton />
//     </div>
//   );
// };

export const LoginPage = () => {
  return <div>LoginPage</div>;
};

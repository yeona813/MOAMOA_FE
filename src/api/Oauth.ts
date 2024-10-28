import axios from 'axios';

const BASE_URL = 'https://api.corecord.site';

// 회원가입
export async function registerUser(registerToken: string, nickName: string, status: string) {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/register`, { nickName, status }, {
      headers: {
        registerToken: registerToken
      }
    });
    console.log('User registration successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('User registration failed:', error);
    throw error;
  }
}

// 임시 토큰으로 accessToken과 refreshToken 발급
export async function getTokens(tmpToken: string) {
  try {
    const response = await axios.get(`${BASE_URL}/api/token`, {
      headers: {
        tmpToken: tmpToken
      }
    });
    console.log('Tokens retrieved successfully:', response.data);
    return response.data; // 이 응답에는 accessToken과 refreshToken이 포함
  } catch (error) {
    console.error('Failed to get tokens:', error);
    throw error;
  }
}

// 리프레시 토큰으로 엑세스 토큰 재발급
export async function reissueAccessToken(refreshToken: string) {
  try {
    const response = await axios.get(`${BASE_URL}/api/token/reissue`, {
      headers: {
        refreshToken: refreshToken
      }
    });
    console.log('Access token reissued successfully:', response.data);
    return response.data; // 이 응답에는 새로운 accessToken이 포함
  } catch (error) {
    console.error('Failed to reissue access token:', error);
    throw error;
  }
}


export const getUserInfo = async (accessToken: string) => {
  const response = await fetch('https://api.corecord.site/user/info', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('사용자 정보 조회 실패');
  }

  return response.json();
};
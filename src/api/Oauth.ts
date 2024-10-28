import axios from 'axios';

const BASE_URL = 'https://api.corecord.site';

/**
 * [1.2] 회원가입 api
 * @param registerToken 
 * @param nickName 
 * @param status 
 * @returns 
 */
export async function registerUser(registerToken: string, nickName: string, status: string) {
  try {
    const response = await axios.post(`${BASE_URL}/api/users/register`, { nickName, status }, {
      headers: {
        'Content-Type': 'application/json',
        registerToken: registerToken
      },
      withCredentials: true,
    });
    console.log('User registration successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('User registration failed:', error);
    throw error;
  }
}

/** [1.4]tmpToken으로 accessToken과 refreshToken 발급
 * @param tmpToken 
 * @returns 
 */
export async function getTokensWithTmpToken(tmpToken: string) {
  try {
    console.log('API - 토큰 교환 요청 시작');
    const response = await axios.get(`${BASE_URL}/api/token`, {
      headers: {
        'Content-Type': 'application/json',
        tmpToken: tmpToken
      }
    });
    console.log('API - 토큰 교환 응답:', response.data);
    return response.data; // 이 응답에는 accessToken과 refreshToken이 포함
  } catch (error) {
    console.error('API - 토큰 교환 실패', error);
    throw error;
  }
}

/** [1.3] refreshToken으로 accessToken 재발급
 * @param accessToken 
 * @returns 
 */
export async function reissueAccessToken(accessToken: string) {
  try {
    const response = await axios.get(`${BASE_URL}/api/token/reissue`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      },
      withCredentials: true
    });
    console.log('Access token reissued successfully:', response.data);
    return response.data; // 새로운 accessToken 반환
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        console.error('Refresh token expired or invalid. Re-login required.');
        throw new Error('RefreshTokenExpired');
      }
      // 다른 오류 상황 처리
      console.error('Failed to reissue access token:', error.response?.data);
      throw new Error('TokenReissueError');
    }
    // 네트워크 오류 등 다른 예외 상황
    console.error('An error occurred:', error);
    throw error;
  }
}

export async function getUserInfo(accessToken: string) {
  try {
    console.log('API - 사용자 정보 요청 시작');
    const response = await axios.get(`${BASE_URL}/api/users/info`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    });
    console.log('API - 사용자 정보 응답:', response.data);
    return response.data; // response.data를 리턴하도록 추가
  } catch (error) {
    console.error('API - 사용자 정보 요청 실패', error);
    throw error;
  }
}
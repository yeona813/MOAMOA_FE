import api from './instance';

/**
 * [8.1] 마이페이지 조회
 * @returns
 */
export async function getUsers() {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await api.get('/api/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.is_success) {
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * [8.2] 로그아웃
 * @returns
 */
export async function postLogout() {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await api.post(
      '/api/users/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.data.is_success) {
      console.log(response);
      localStorage.removeItem('accessToken');
    }
  } catch (error) {
    console.error(error);
  }
}

interface UserInfoProps {
  nickname?: string;
  status?: string;
}

export async function patchUserInfo({ nickname, status }: UserInfoProps) {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await api.patch(
      '/api/users',
      { ...(nickname && { nickName: nickname }), ...(status && { status }) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (response.data.is_success) {
      return response.data.is_success;
    }
  } catch (error) {
    console.error(error);
  }
}

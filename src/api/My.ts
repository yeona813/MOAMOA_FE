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
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

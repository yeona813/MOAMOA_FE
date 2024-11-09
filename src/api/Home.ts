import api from './instance';

export async function getRecords() {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await api.get('/api/records', {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });

    if (response.data.is_success) {
      return response.data.recordDtoList;
    }
  } catch (error) {
    console.error(error);
  }
}

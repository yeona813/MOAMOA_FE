import api from './instance';

export async function getRecords() {
  try {
    const response = await api.get('/api/records', {
      withCredentials: true,
    });

    if (response.data.is_success) {
      return response.data.recordDtoList;
    }
  } catch (error) {
    console.error(error);
  }
}

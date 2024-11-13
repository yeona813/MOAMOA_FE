import api from './instance';

export async function getRecords() {
  try {
    const response = await api.get('/api/records');

    if (response.data.is_success) {
      return response.data.recordDtoList;
    }
  } catch (error) {
    console.error(error);
  }
}

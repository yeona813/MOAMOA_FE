import api from './instance';

export async function getGraph() {
  try {
    const response = await api.get('/api/keyword/graph');
    if (response.data.is_success) {
      return response.data.data.keywordGraph;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
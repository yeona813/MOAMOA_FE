import api from '@/api/instance';

/** [4.1] 경험 기록 세부 조회 */
export const getMemo = async (recordId: number) => {
  try {
    const response = await api.get(`/api/records/memo/${recordId}`);
    console.log('요청 URL:', `/api/memo/${recordId}`);
    console.log('응답 데이터:', response);
    if (response.data.is_success) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('경험 기록 세부 조회 실패:', error);
    throw error;
  }
};

/** [4.2] 메모 임시 저장 조회 */
export const getTempMemo = async () => {
  try {
    const response = await api.get('/api/records/memo/tmp');
    if (response.data.is_success) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('메모 임시 저장 조회 실패:', error);
    throw error;
  }
};

/** [4.3] 메모 임시 저장 */
export const postTempMemo = async (title: string, content: string) => {
  try {
    const response = await api.post('/api/records/memo/tmp', {
      title,
      content,
    });
    if (response.data.is_success) {
      return response.data.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error('메모 임시 저장 실패:', error);
    throw error;
  }
};

import api from './instance';

/**
 * [6.1] 폴더 추가하기
 */
export async function postNewFolder(title: string) {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await api.post(
      '/api/folders',
      { title },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
        },
      },
    );

    if (response.data.is_success) {
      return response.data.folderDtoList[0].title; // 이 부분 경험 기록 폴더 추가하면서 다시 고민해야한다!
    }
  } catch (error) {
    console.error(error);
  }
}

/**
 * [6.3] 폴더 리스트 조회하기
 */
export async function getFolders() {
  try {
    const token = localStorage.getItem('accessToken');

    const response = await api.get('/api/folders', {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });

    if (response.data.is_success) {
      return response.data.folderDtoList;
    }
  } catch (error) {
    console.error(error);
  }
}

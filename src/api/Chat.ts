import api from './instance';

interface ChatRequest {
  is_success: boolean;
  data: {
    chatRoomId: number;
    firstChat: string;
  };
}

/** [3.1] 채팅방 생성 */
export const postChat = async (): Promise<ChatRequest['data']> => {
  try {
    const response = await api.post<ChatRequest>('/api/records/chat');
    if (response.data.is_success) {
      console.log('채팅방 생성 성공:', response.data);
      return response.data.data;
    }
    throw new Error('is_success가 false입니다.');
  } catch (error) {
    console.error('채팅방 생성 실패:', error);
    throw error;
  }
};

interface ChatMessageRequest {
  content: string;
  guide?: boolean;
}

/** [3.2] AI 채팅 메시지 전송 */
export const postAiChat = async (chatRoomId: number, data: ChatMessageRequest) => {
  try {
    // guide가 true인 경우 content를 고정된 문자열로 설정
    const requestBody = data.guide
      ? {
        guide: true,
        content: "어떤 경험을 말해야 할지 모르겠어요."
      }
      : {
        content: data.content
      };

    console.log("Request Body:", requestBody);

    const response = await api.post(`/api/records/chat/${chatRoomId}`, requestBody);

    if (response.data.is_success) {
      console.log('AI 응답:', response.data.data);
      return response.data.data;
    }
    throw new Error('is_success가 false입니다.');
  } catch (error) {
    console.error('AI 채팅 메시지 전송 실패:', error);
    throw error;
  }
};

/** [3.3] 채팅 메시지 조회 */

interface ChatHistoryResponse {
  is_success: boolean;
  code: string;
  message: string;
  data: {
    chats: Array<{
      content: string;
      author: 'ai' | 'user';
      isMe: boolean;
      createdAt?: string;
    }>;
  };
}

export const getChat = async (chatRoomId: number): Promise<ChatHistoryResponse['data']> => {
  try {
    console.log('채팅 기록 조회 요청:', chatRoomId);
    const response = await api.get<ChatHistoryResponse>(`/api/records/chat/${chatRoomId}`);
    console.log('채팅 기록 조회 응답:', response.data);

    if (response.data.is_success) {
      return response.data.data;
    }
    throw new Error(`채팅 메시지 조회 실패: ${response.data.message}`);
  } catch (error) {
    console.error('채팅 메시지 조회 실패:', error);
    throw error;
  }
};

/** [3.4] 채팅 삭제 */
export const deleteChat = async (chatRoomId: number) => {
  try {
    const response = await api.delete(`/api/records/chat/${chatRoomId}`);
    if (response.data.is_success) {
      console.log('채팅 삭제 성공:', response.data);
      return response.data;
    }
    throw new Error('채팅 삭제 실패');
  } catch (error) {
    console.error('채팅 삭제 실패:', error);
    throw error;
  }
};

/** [3.5] 채팅 경험 요약하기*/
export const getSummary = async (chatRoomId: number) => {
  try {
    const response = await api.get(`/api/records/chat/${chatRoomId}/summary`);

    // 성공 응답이지만 데이터가 없는 경우
    if (!response.data.is_success) {
      if (response.data.code === 'E0305_NO_RECORD') {
        throw new Error('경험 기록의 내용이 충분하지 않습니다.');
      }

      // 요약 관련 에러인 경우 재시도
      if (response.data.code.includes('E0305_')) {
        // 최대 3번까지 재시도
        for (let i = 0; i < 2; i++) {
          const retryResponse = await api.get(`/api/records/chat/${chatRoomId}/summary`);
          if (retryResponse.data.is_success) {
            return retryResponse.data.data;
          }
          // 1초 대기 후 재시도
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }

      throw new Error(response.data.message);
    }

    return response.data.data;
  } catch (error) {
    console.error('채팅 경험 요약 실패:', error);
    throw error;
  }
};

/** [3.6] 채팅 임시 저장 유무 조회 */

interface CheckTmpChatResponse {
  is_success: boolean;
  code: string;
  message: string;
  data: {
    chatRoomId: number | null;
    exist: boolean;
    content: string | null;
    author: 'ai' | 'user';
  };
}

export const checkTmpChat = async (): Promise<CheckTmpChatResponse['data']> => {
  try {
    const response = await api.get<CheckTmpChatResponse>('/api/records/chat/tmp');

    if (response.data.is_success) {
      console.log('임시 저장된 채팅 기록 조회 성공:', response.data);
      return response.data.data;
    } else {
      throw new Error('임시 저장된 기록 조회 실패: 성공 응답이 아닙니다.');
    }
  } catch (error) {
    console.error('임시 저장된 채팅 기록 조회 실패:', error);
    throw error;
  }
};

/** [3.7] 채팅 임시 저장 */
export const postTmpChat = async (chatRoomId: number) => {
  try {
    // chatRoomId가 유효한지 확인
    if (!chatRoomId || isNaN(chatRoomId)) {
      throw new Error('유효하지 않은 채팅방 ID입니다.');
    }

    // 요청 URL과 데이터 로깅
    console.log('임시 저장 요청:', {
      url: `/api/records/chat/${chatRoomId}/tmp`,
      chatRoomId
    });
    const response = await api.post(`/api/records/chat/${chatRoomId}/tmp`);

    // 응답 로깅
    console.log('임시 저장 응답:', response.data);

    if (response.data.is_success) {
      console.log('임시 저장 성공:', response.data);
      return response.data;
    } else {
      throw new Error('임시 저장 실패: 성공 응답이 아닙니다.');
    }
  } catch (error) {
    console.error('임시 저장 실패:', error);
    throw error;
  }
};
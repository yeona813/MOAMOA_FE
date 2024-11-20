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
      return response.data.data;
    }
    throw new Error('is_success가 false입니다.');
  } catch (error) {
    console.error(error);
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
    const response = await api.post(`/api/records/chat/${chatRoomId}`, requestBody);

    if (response.data.is_success) {
      return response.data.data;
    }
    throw new Error('is_success가 false입니다.');
  } catch (error) {
    console.error(error);
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
    const response = await api.get<ChatHistoryResponse>(`/api/records/chat/${chatRoomId}`);
    if (response.data.is_success) {
      return response.data.data;
    }
    throw new Error(`채팅 메시지 조회 실패: ${response.data.message}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/** [3.4] 채팅 삭제 */
export const deleteChat = async (chatRoomId: number) => {
  try {
    const response = await api.delete(`/api/records/chat/${chatRoomId}`);
    if (response.data.is_success) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/** [3.5] 채팅 경험 요약하기 */
export class CustomError extends Error {
  code: string;

  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

export const getSummary = async (chatRoomId: number) => {
  try {
    const response = await api.get(`/api/records/chat/${chatRoomId}/summary`);

    if (!response.data.is_success) {
      switch (response.data.code) {
        case 'E0305_OVERFLOW_SUMMARY_TITLE':
          throw new CustomError(response.data.code, '제목은 50자 이내여야 합니다. ' + response.data.message);
        case 'E0305_OVERFLOW_SUMMARY_CONTENT':
          throw new CustomError(response.data.code, '경험 요약 내용은 500자 이내여야 합니다. ' + response.data.message);
        case 'E0305_INVALID_CHAT_SUMMARY':
          throw new CustomError(response.data.code, '채팅 경험 요약 파싱 중 오류가 발생했습니다. ' + response.data.message);
        case 'E0305_NO_RECORD':
          alert('경험 기록의 내용이 충분하지 않습니다. 내용을 더 자세히 작성해주세요.');
          throw new CustomError(response.data.code, '경험 기록의 내용이 부족합니다.');
        default:
          throw new CustomError(response.data.code, response.data.message || '요약 처리 중 알 수 없는 오류가 발생했습니다.');
      }
    }

    return response.data.data;
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`Code: ${error.code}, Message: ${error.message}`);
    } else {
      console.error(error);
    }
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
      return response.data.data;
    } else {
      throw new Error('임시 저장된 기록 조회 실패: 성공 응답이 아닙니다.');
    }
  } catch (error) {
    console.error(error);
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
    const response = await api.post(`/api/records/chat/${chatRoomId}/tmp`);

    if (response.data.is_success) {
      return response.data;
    } else {
      throw new Error('임시 저장 실패: 성공 응답이 아닙니다.');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
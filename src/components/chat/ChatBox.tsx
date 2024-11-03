import { useState } from 'react';
import UpArrowIcon from '@icons/UpArrowIcon.svg';
import * as S from './ChatBoxStyle';

interface ChatBoxProps {
  onSubmit: (message: string) => void;
}

export const ChatBox = ({ onSubmit }: ChatBoxProps) => {
  const [message, setMessage] = useState('');

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim()) {
      onSubmit(message);
      setMessage('');
    }
  };

  return (
    <S.ChatBoxContainer>
      <S.ChatBoxForm onSubmit={handleSend}>
        <S.ChatBoxInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="  내용을 입력해 주세요"
        />
        <S.ChatBoxButton type="submit">
          <img src={UpArrowIcon} alt="Send" />
        </S.ChatBoxButton>
      </S.ChatBoxForm>
    </S.ChatBoxContainer>
  );
};

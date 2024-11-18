import { useNavigate } from 'react-router-dom';
import * as S from './SheetItem.Style';
import { postChat } from '@/api/Chat';

export interface SheetItemProps {
  title: string;
  subTitle: string;
  color: 'blue' | 'yellow'; //추후 지워야함
}

/**
 *
 * @param title - 제목
 * @param subTitle - 부제목
 * @param color - SheetItem의 색깔
 * @returns
 */
export const SheetItem = ({ title, subTitle, color }: SheetItemProps) => {
  const navigate = useNavigate();

  const handleMemoClick = () => {
    navigate('/memo');
  };

  const handleChatClick = async () => {
    const response = await postChat();
    if (response.chatRoomId) {
      navigate(`/chat/${response.chatRoomId}`);
    }
  };

  return (
    <S.SheetItem onClick={title === '메모 기록' ? handleMemoClick : handleChatClick}>
      <S.DIV color={color} />
      <S.TextContainer>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Title>{title}</S.Title>
      </S.TextContainer>
    </S.SheetItem>
  );
};

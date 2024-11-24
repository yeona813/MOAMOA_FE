import { useNavigate } from 'react-router-dom';
import * as S from './SheetItem.Style';
import { postChat } from '@/api/Chat';

export interface SheetItemProps {
  title: string;
  subTitle: string;
  icon: string;
}

/**
 *
 * @param title - 제목
 * @param subTitle - 부제목
 * @param icon - 아이콘
 * @returns
 */
export const SheetItem = ({ title, subTitle, icon }: SheetItemProps) => {
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
      <S.IconContainer>
        <S.Icon src={icon} />
      </S.IconContainer>
      <S.TextContainer>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Title>{title}</S.Title>
      </S.TextContainer>
    </S.SheetItem>
  );
};

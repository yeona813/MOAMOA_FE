import { SheetItem, SheetItemProps } from '../../home/sheetItem/SheetItem';
import { BottomSheet } from './BottomSheet';
import * as S from './RecordBottomSheet.Style';
import CloseIcon from '@icons/CloseIcon.svg';
import { postChat } from '@/api/Chat';
import { useNavigate } from 'react-router-dom';

const SHEET_ITEMS: SheetItemProps[] = [
  {
    title: '메모 기록',
    subTitle: '간편하고 빠르게',
    color: 'yellow',
    path: '/memo',
  },
  {
    title: 'AI 채팅 기록',
    subTitle: 'AI 대화로 쉽게',
    color: 'blue',
    path: '/chat',
  },
];

interface RecordBottomSheetProps {
  onClick: () => void;
}
export const RecordBottomSheet = ({ onClick }: RecordBottomSheetProps) => {
  const navigate = useNavigate();

  const handleItemClick = async (item: SheetItemProps) => {
    if (item.title === 'AI 채팅 기록') {
      try {
        const chatData = await postChat();
        if (chatData) {
          const { chatRoomId, firstChat } = chatData;

          localStorage.setItem('chatRoomId', chatRoomId.toString()); // 채팅방 아이디 저장
          navigate(item.path, {
            state: { chatRoomId, firstChat }
          });
        }
      } catch (error) {
        console.error('채팅 시작 실패:', error);
        throw error;
      }
    }
    else {
      navigate(item.path);
    }
  };

  return (
    <BottomSheet onClick={onClick}>
      <S.Header>
        <S.Title>경험 기록하기</S.Title>
        <S.Icon src={CloseIcon} alt="closeIcon" onClick={onClick} />
      </S.Header>
      <S.SheetContent>
        {SHEET_ITEMS.map((item, index) => (
          <SheetItem
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            color={item.color}
            path={item.path}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </S.SheetContent>
    </BottomSheet>
  );
};

import { SheetItem, SheetItemProps } from '../../home/sheetItem/SheetItem';
import { BottomSheet } from './BottomSheet';
import * as S from './RecordBottomSheetStyle';

const SHEET_ITEMS: SheetItemProps[] = [
  {
    title: 'AI 채팅 기록',
    subTitle: 'AI 대화를 통해 쉽게 기록하는',
    color: 'blue',
    path: '/chat',
  },
  {
    title: '메모 기록',
    subTitle: '간편하고 빠르게 기록하는',
    color: 'yellow',
    path: '/memo',
  },
];

interface RecordBottomSheetProps {
  onClick: () => void;
}
export const RecordBottomSheet = ({ onClick }: RecordBottomSheetProps) => {
  return (
    <BottomSheet title="경험 기록하기" type="long" onClick={onClick}>
      <S.SheetContent>
        {SHEET_ITEMS.map((item, index) => (
          <SheetItem
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            color={item.color}
            path={item.path}
          />
        ))}
      </S.SheetContent>
    </BottomSheet>
  );
};

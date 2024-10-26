import { useState } from 'react';
import { BottomSheet } from '../../components/common/bottomSheet/BottomSheet';
import * as S from './HomePageStyle';
import { SheetItem } from '../../components/home/sheetItem/SheetItem';
import { Header } from '../../components/home/header/Header';
import { Content } from '../../components/home/content/Content';
import { SheetItemProps } from '../../components/home/sheetItem/SheetItem';

// TODO
// 푸터... 하 ㅜㅜㅜ 푸터야 푸터 생기면 바텀시트 위치 수정해야 함
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

export const HomePage = () => {
  const [openBottom, setOpenBottom] = useState(false);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  return (
    <>
      <Header onClick={toggleBottomSheet} />
      <Content />
      {openBottom && (
        <BottomSheet title="경험 기록하기" type="long" onClick={toggleBottomSheet}>
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
      )}
    </>
  );
};

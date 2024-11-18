import { Header } from '@/components/layout/header/Header';
import * as S from './Header.Style';
import { SheetItem, SheetItemProps } from '../sheetItem/SheetItem';

const SHEET_ITEMS: SheetItemProps[] = [
  {
    title: '메모 기록',
    subTitle: '빠르고 간편하게',
    color: 'yellow',
  },
  {
    title: 'AI 채팅 기록',
    subTitle: 'AI 대화로 쉽게',
    color: 'blue',
  },
];

interface HomeHeaderProps {
  onClickSideBar: () => void;
}

/**
 *
 * @param onClickSideBar - 사이드바 핸들링 함수
 * @returns
 */
export const HomeHeader = ({ onClickSideBar }: HomeHeaderProps) => {
  const nickname = localStorage.getItem('nickname');

  return (
    <S.Header>
      <Header onClick={onClickSideBar} />
      <S.Title>
        안녕하세요. {nickname}님 <br /> 오늘의 경험을 모아보세요!
      </S.Title>
      <S.SheetContainer>
        {SHEET_ITEMS.map((item, index) => (
          <SheetItem key={index} title={item.title} subTitle={item.subTitle} color={item.color} />
        ))}
      </S.SheetContainer>
    </S.Header>
  );
};

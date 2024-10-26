import { useState } from 'react';
import { BottomSheet } from '../../components/common/bottomSheet/BottomSheet';
import { Button } from '../../components/common/button/Button';
import { List } from '../../components/features/home/List';
import * as S from './HomePageStyle';
import { SheetItem } from '../../components/features/home/SheetItem';

const LISTDATA = [
  {
    folderText: '프로젝트',
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024-10-25',
  },
  {
    folderText: '프로젝트',
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024-10-25',
  },
]; // 추후 백엔드에서 받아오면 다른 방식으로 변경할 것!

// TODO
// 2. 더보기 클릭 시 이동 처리
// 3. List 하나 눌렀을 때 어디로 이동할지
// 4. 푸터... 하 ㅜㅜㅜ 푸터야 푸터 생기면 바텀시트 위치 수정해야 함
// 5. bottom sheet portal

export const HomePage = () => {
  const [openBottom, setOpenBottom] = useState(false);

  const handleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  return (
    <>
      <S.Header>
        <S.YellowBlur />
        <S.BlueBlur />
        <S.Title>
          CO:RECORD와 함께 <br /> 경험을 기록해보세요
        </S.Title>
        <S.ButtonContainer>
          <Button $styleType="shadow" icon="/icons/RecordIcon.svg" onClick={handleBottomSheet}>
            기록하러 가기
          </Button>
        </S.ButtonContainer>
      </S.Header>
      <S.Content>
        <S.TextContainer>
          <S.Text>최근 생성된 경험 리스트</S.Text>
          <S.Plus
            onClick={() => {
              console.log('더보기');
            }}
          >
            더보기
          </S.Plus>
        </S.TextContainer>
        <S.ListContainer>
          {LISTDATA.map((item, index) => (
            <List
              key={index}
              folderText={item.folderText}
              title={item.title}
              chips={item.chips}
              date={item.date}
            />
          ))}
        </S.ListContainer>
      </S.Content>
      {openBottom && (
        <BottomSheet title="경험 기록하기" type="long" onClick={handleBottomSheet}>
          <S.SheetContent>
            <SheetItem
              title="AI 채팅 기록"
              subTitle="AI 대화를 통해 쉽게 기록하는"
              color="blue"
              path="/chat"
            />
            <SheetItem
              title="메모 기록"
              subTitle="간편하고 빠르게 기록하는"
              color="yellow"
              path="/memo"
            />
          </S.SheetContent>
        </BottomSheet>
      )}
    </>
  );
};

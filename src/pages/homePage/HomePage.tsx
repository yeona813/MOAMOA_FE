import { Button } from '../../components/common/button/Button';
import { List } from '../../components/features/home/List';
import * as S from './HomePageStyle';

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
// 1. 기록하기 버튼 클릭 시 밑에 버튼 팝업 나오기
// 2. 더보기 클릭 시 이동 처리
// 3. List 하나 눌렀을 때 어디로 이동할지
// 4. 푸터... 하 ㅜㅜㅜ 푸터야

export const HomePage = () => {
  return (
    <>
      <S.Header>
        <S.YellowBlur />
        <S.BlueBlur />
        <S.Title>
          CO:RECORD와 함께 <br /> 경험을 기록해보세요
        </S.Title>
        <S.ButtonContainer>
          <Button
            $styleType="shadow"
            icon="/icons/RecordIcon.svg"
            onClick={() => {
              console.log('기록하러 가기 버튼 클릭');
            }}
          >
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
    </>
  );
};

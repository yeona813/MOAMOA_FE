import { useNavigate } from 'react-router-dom';
import * as S from './ContentStyle';
import { List } from '../../common/list/List';
import { Button } from '../../common/button/Button';

interface ListItem {
  id: number;
  title: string;
  chips: string[];
  date: string;
}

const LISTDATA: ListItem[] = [
  {
    id: 1,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 2,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 1,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 2,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 1,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 2,
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
]; // 추후 백엔드에서 받아오면 다른 방식으로 변경할 것!

interface ContentProps {
  onClick: () => void;
}

export const Content = ({ onClick }: ContentProps) => {
  const navigate = useNavigate();

  return (
    <S.Content>
      {LISTDATA.length > 0 ? (
        LISTDATA.map((item, index) => (
          <List
            key={index}
            title={item.title}
            chips={item.chips}
            date={item.date}
            onClick={() => {
              navigate(`/list/${item.id}`);
            }}
            type="small"
          />
        ))
      ) : (
        <S.EmptyContainer>
          <S.Empty />
          <S.EmptyMessage>
            아직 작성한 경험이 없어요.
            <br />
            CO:RECORD와 함께
            <br />
            경험을 기록해보세요!
          </S.EmptyMessage>
          <Button $styleType="shadow" onClick={onClick}>
            기록하러 가기
          </Button>
        </S.EmptyContainer>
      )}
    </S.Content>
  );
};

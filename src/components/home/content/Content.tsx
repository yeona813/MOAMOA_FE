import { useNavigate } from 'react-router-dom';
import * as S from './ContentStyle';
import { List } from '../../common/list/List';

const LISTDATA = [
  {
    id: 1,
    folderText: '프로젝트',
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 2,
    folderText: '프로젝트',
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 1,
    folderText: '프로젝트',
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
  {
    id: 1,
    folderText: '프로젝트',
    title: '프로젝트 진행 계획서',
    chips: ['창의력', '커뮤니케이션', '문제 해결'],
    date: '2024.10.25',
  },
]; // 추후 백엔드에서 받아오면 다른 방식으로 변경할 것!

export const Content = () => {
  const navigate = useNavigate();

  return (
    <S.Content>
      <S.TextContainer>
        <S.Text>최근 생성된 경험 리스트</S.Text>
        <S.Plus
          onClick={() => {
            navigate('/list');
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
            onClick={() => {
              navigate(`/report/${item.id}`);
            }}
            type="large"
          />
        ))}
      </S.ListContainer>
    </S.Content>
  );
};

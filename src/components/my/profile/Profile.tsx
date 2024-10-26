import { useNavigate } from 'react-router-dom';
import * as S from './ProfileStyle';

export const Profile = () => {
  const navigate = useNavigate();

  // TODO 백엔드 연결하면서 다음 부분 바꿔야함
  const nickname = '김코코';
  const userRole = '취업준비생';
  const recordCount = 9;

  return (
    <S.Container>
      <S.Profile>
        <S.TextContainer>
          <S.Text>{nickname}님의 프로필</S.Text>
          <S.SubText>{userRole}</S.SubText>
        </S.TextContainer>
        <S.Button
          onClick={() => {
            navigate('/editProfile');
          }}
        >
          내 프로필 수정하기
        </S.Button>
      </S.Profile>
      <S.Record>
        <S.Span>총 {recordCount}건</S.Span>의 레코드를 기록했어요.
      </S.Record>
    </S.Container>
  );
};

import { Button } from '@components/common/button/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './NotFoundPage.Style';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  // const isMobile = useMediaQuery('(max-width: 1048px)');

  const handleStart = () => {
    navigate('/home');
  };

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.LogoImage src="/images/NotFoundImage.png" alt="404" />
        <S.Logo>페이지를 찾을 수 없어요</S.Logo>
        <S.Text>
          존재하지 않는 주소를 입력하셨거나,
          <br />
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </S.Text>
      </S.ContentWrapper>
      <S.ButtonWrapper>
        <Button styleType="basic" onClick={handleStart}>
          홈으로
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  );
};

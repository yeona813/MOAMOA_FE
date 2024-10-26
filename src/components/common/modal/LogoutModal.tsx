import { Button } from '../button/Button';
import { Modal } from './Modal';
import * as S from './LogoutModalStyle';

//@TODO
// 1. 로그아웃 함수 만들어야함

interface LogoutModalProps {
  onClick: () => void;
}
export const LogoutModal = ({ onClick }: LogoutModalProps) => {
  return (
    <Modal onClick={onClick}>
      <S.Content>
        <S.Text>로그아웃 하시겠어요?</S.Text>
        <S.ButtonContainer>
          <Button $styleType="popupLeft">로그아웃하기</Button>
          <Button $styleType="popupRight" onClick={onClick}>
            돌아가기
          </Button>
        </S.ButtonContainer>
      </S.Content>
    </Modal>
  );
};

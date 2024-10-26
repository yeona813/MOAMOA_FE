import { Modal } from './Modal';
import * as S from './DeleteIdModalStyle';
import { Button } from '../button/Button';

interface DeleteIdModal {
  onClick: () => void;
  onClickDeleteId: () => void;
}

export const DeleteIdModal = ({ onClick, onClickDeleteId }: DeleteIdModal) => {
  return (
    <Modal onClick={onClick}>
      <S.Content>
        <S.Text>
          정말 코어레코드를 <br />
          탈퇴하시겠어요?
        </S.Text>
        <S.Description>탈퇴 시, 모든 기록이 사라지며 복구할 수 없어요.</S.Description>
        <S.ButtonContainer>
          <Button $styleType="popupLeft" onClick={onClickDeleteId}>
            탈퇴하기
          </Button>
          <Button $styleType="popupRight" onClick={onClick}>
            돌아가기
          </Button>
        </S.ButtonContainer>
      </S.Content>
    </Modal>
  );
};

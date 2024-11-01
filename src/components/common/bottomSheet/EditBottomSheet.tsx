import { BottomSheet } from './BottomSheet';
import * as S from './EditBottomSheetStyle';

interface EditBottomSheetProps {
  onClick: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickChange: () => void;
}

export const EditBottomSheet = ({
  onClick,
  onClickEdit,
  onClickDelete,
  onClickChange,
}: EditBottomSheetProps) => {
  return (
    <BottomSheet onClick={onClick}>
      <S.SheetContent>
        <S.SheetItem onClick={onClickEdit}>
          <S.Icon src="/icons/EditIcon.svg" />
          수정하기
        </S.SheetItem>
        <S.SheetItem $isDelete={true} onClick={onClickDelete}>
          <S.Icon src="/icons/ReportDeleteIcon.svg" />
          삭제하기
        </S.SheetItem>
        <S.SheetItem onClick={onClickChange}>
          <S.Icon src="/icons/ChangeFolderIcon.svg" />
          폴더 변경하기
        </S.SheetItem>
      </S.SheetContent>
    </BottomSheet>
  );
};

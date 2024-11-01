import { BottomSheet } from './BottomSheet';
import * as S from './EditBottomSheetStyle';

interface EditBottomSheetProps {
  onClick: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickChange: () => void;
}

const EDIT_ITEM = [
  { icon: '/icons/EditIcon.svg', label: '수정하기', actionKey: 'onClickEdit' },
  {
    icon: '/icons/ReportDeleteIcon.svg',
    label: '삭제하기',
    actionKey: 'onClickDelete',
    isDelete: true,
  },
  { icon: '/icons/ChangeFolderIcon.svg', label: '폴더 변경하기', actionKey: 'onClickChange' },
];

export const EditBottomSheet = ({
  onClick,
  onClickEdit,
  onClickDelete,
  onClickChange,
}: EditBottomSheetProps) => {
  const actions: Record<'onClickEdit' | 'onClickDelete' | 'onClickChange', () => void> = {
    onClickEdit,
    onClickDelete,
    onClickChange,
  };

  return (
    <BottomSheet onClick={onClick}>
      <S.SheetContent>
        {EDIT_ITEM.map(({ icon, label, actionKey, isDelete }) => (
          <S.SheetItem
            key={label}
            $isDelete={isDelete}
            onClick={actions[actionKey as keyof typeof actions]}
          >
            <S.Icon src={icon} />
            {label}
          </S.SheetItem>
        ))}
      </S.SheetContent>
    </BottomSheet>
  );
};

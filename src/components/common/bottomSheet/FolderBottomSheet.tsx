import { ChangeEvent, useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { BottomSheet } from './BottomSheet';
import * as S from './FolderBottomSheetStyle';

interface FolderBottomSheetProps {
  onClick: () => void;
}

/**
 *
 * @param onClick - BottomSheet 열고 닫는 함수
 * @returns
 */
export const FolderBottomSheet = ({ onClick }: FolderBottomSheetProps) => {
  const [folderName, setFolderName] = useState('');

  const changeFolderName = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  return (
    <BottomSheet title="새 폴더 추가하기" type="short" onClick={onClick}>
      <S.SheetContent>
        추가할 폴더의 이름을 적어주세요.
        <Input
          placeholder="최대 15자까지 입력할 수 있어요"
          value={folderName}
          onChange={changeFolderName}
        />
        <Button $styleType="basic" disabled={folderName === ''}>
          완료
        </Button>
      </S.SheetContent>
    </BottomSheet>
  );
};

import { ChangeEvent, useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { BottomSheet } from './BottomSheet';
import * as S from './FolderBottomSheetStyle';
import { SelectBox } from '../selectbox/SelectBox';

interface FolderBottomSheetProps {
  onClick: () => void;
  onClickButton: () => void;
  text: string;
  isSelectBox?: boolean;
}

const FOLDER_DATA = [
  '큐시즘 서비스 기획',
  '마이리얼트립 인턴',
  '서비스디자인학과 팀 프로젝트',
  '회사문장',
];
/**
 *
 * @param onClick - BottomSheet 열고 닫는 함수
 * @param onClickButton - Button 클릭 시 수행하는 함수
 * @param text - BottomSheet의 제목
 * @param isSelectBox - (optional) true일 경우 selectBox나옴
 * @returns
 */
export const FolderBottomSheet = ({
  onClick,
  onClickButton,
  text,
  isSelectBox = false,
}: FolderBottomSheetProps) => {
  const [folderName, setFolderName] = useState('');

  const changeFolderName = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const changeSelect = (select: string) => {
    setFolderName(select);
  };

  return (
    <BottomSheet title="새 폴더 추가하기" onClick={onClick}>
      <S.SheetContent>
        {text}
        {isSelectBox ? (
          <SelectBox select={folderName} onChange={changeSelect} selectData={FOLDER_DATA} />
        ) : (
          <Input
            placeholder="최대 15자까지 입력할 수 있어요"
            value={folderName}
            onChange={changeFolderName}
          />
        )}
        <Button $styleType="basic" disabled={folderName === ''} onClick={onClickButton}>
          완료
        </Button>
      </S.SheetContent>
    </BottomSheet>
  );
};

import { useState } from 'react';
import * as S from './SelectBox.Style';
import DownArrowIcon from '@icons/DownArrowIcon.svg';
import { FolderListProps } from '@/types/Folder';

interface SelectBoxProps {
  select: string;
  onChange: (value: string) => void;
  selectData: FolderListProps[];
  placeholder?: string;
}

/**
 *
 * @param select - 선택될 값을 저장할 state
 * @param onChange - state를 변경할 함수
 * @param selectData - 드롭다운 시 나올 값들
 * @returns
 */
export const SelectBox = ({ select, onChange, selectData, placeholder }: SelectBoxProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = (item: string) => {
    onChange(item);
    setOpen(false);
  };

  return (
    <S.Container>
      <S.SelectBox open={open} onClick={() => setOpen((prev) => !prev)}>
        <S.SelectText $hasValue={!!select}>{select || placeholder}</S.SelectText>
        <S.Icon src={DownArrowIcon} alt="downArrow" />
      </S.SelectBox>
      {open && (
        <S.Option>
          {selectData.map((item) => (
            <S.Text key={item.folderId} onClick={() => handleClick(item.title)}>
              {item.title}
            </S.Text>
          ))}
        </S.Option>
      )}
    </S.Container>
  );
};

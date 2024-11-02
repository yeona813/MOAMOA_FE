import { useState } from 'react';
import * as S from './SelectBoxStyle';
import DownArrowIcon from '@icons/DownArrowIcon.svg';

interface SelectBoxProps {
  select: string;
  onChange: (value: string) => void;
  selectData: string[];
}

/**
 *
 * @param select - 선택될 값을 저장할 state
 * @param onChange - state를 변경할 함수
 * @param selectData - 드롭다운 시 나올 값들
 * @returns
 */
export const SelectBox = ({ select, onChange, selectData }: SelectBoxProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onChange(e.currentTarget.innerText);
    setOpen(false);
  };

  return (
    <S.Container>
      <S.SelectBox open={open} onClick={() => setOpen((prev) => !prev)}>
        <S.SelectText $hasValue={!!select}>{select || '소속을 선택해주세요'}</S.SelectText>
        <S.Icon src={DownArrowIcon} alt="downArrow" />
      </S.SelectBox>
      {open && (
        <S.Option>
          {selectData.map((item) => (
            <S.Text key={item} onClick={handleClick}>
              {item}
            </S.Text>
          ))}
        </S.Option>
      )}
    </S.Container>
  );
};

import { ChangeEvent } from 'react';
import * as S from './MemoStyle';

interface MemoProps {
  memo: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Memo = ({ memo, onChange }: MemoProps) => {
  return (
    <S.Memo>
      <S.Icon />
      <S.TextFiled
        placeholder="경험 당시의 상황, 행동, 문제, 결과 등을 기록해주세요."
        value={memo}
        onChange={onChange}
      />
      <S.YellowSmallBlur />
      <S.YellowBigBlur />
    </S.Memo>
  );
};

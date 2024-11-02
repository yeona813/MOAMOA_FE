import { ChangeEvent, useState } from 'react';
import { Memo } from '@components/memo/Memo';

export const MemoPage = () => {
  const [memo, setMemo] = useState('');

  const handleChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
    console.log(memo);
  };

  return (
    <div>
      <Memo memo={memo} onChange={handleChangeMemo} />
    </div>
  );
};

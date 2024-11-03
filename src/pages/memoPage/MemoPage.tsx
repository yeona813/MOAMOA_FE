import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Memo } from '@components/memo/Memo';
import { Input } from '@components/common/input/Input';
import { SelectBox } from '@components/common/selectbox/SelectBox';
import { TabBar } from '@components/layout/tabBar/TabBar';
import { DetailModal } from '@components/common/modal/DetailModal';
import * as S from './MemoPageStyle';

const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
};

const DUMMY_MEMO = {
  title: '오늘의 회고',
  category: '카테고리1',
  memo: '오늘 하루 동안 있었던 일을 기록합니다...'
};

export const MemoPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [memo, setMemo] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showTempDataModal, setShowTempDataModal] = useState(false);
  const [tempMemo, setTempMemo] = useState<{
    title: string;
    category: string;
    memo: string;
  } | null>(null);

  useEffect(() => {
    // 컴포넌트 마운트 시 더미데이터를 임시저장
    localStorage.setItem('tempMemo', JSON.stringify(DUMMY_MEMO));

    // 임시저장된 메모 확인 및 모달 표시
    const savedMemo = localStorage.getItem('tempMemo');
    if (savedMemo) {
      setTempMemo(JSON.parse(savedMemo));
      setShowTempDataModal(true);
    }
  }, []);

  const saveTempMemo = (title: string, category: string, memo: string) => {
    const titleToSave = title || getFormattedDate();
    localStorage.setItem('tempMemo', JSON.stringify({
      title: titleToSave,
      category,
      memo
    }));
  };

  const handleBackButton = () => {
    if ((title || getFormattedDate()) && memo) {
      saveTempMemo(title, category, memo);
      setShowModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    saveTempMemo(newTitle, category, memo);
  };

  const handleChangeCategory = (value: string) => {
    setCategory(value);
    saveTempMemo(title, value, memo);
  };

  const handleChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = e.target.value;
    setMemo(newMemo);
    saveTempMemo(title, category, newMemo);
  };

  const handleSaveButton = () => {
    const titleToSave = title || getFormattedDate();
    console.log('저장되었습니다.', {
      title: titleToSave,
      category,
      memo
    });
    clearTempMemo();
  };

  const restoreTempMemo = () => {
    if (tempMemo) {
      setTitle(tempMemo.title);
      setCategory(tempMemo.category);
      setMemo(tempMemo.memo);
    }
    setShowModal(false);
  };

  const clearTempMemo = () => {
    localStorage.removeItem('tempMemo');
    setShowModal(false);
    navigate('/');
  };

  const isSaveDisabled = !title && !memo;

  return (
    <S.Container>
      <TabBar
        onClickBackIcon={handleBackButton}
        centerText="경험 기록"
        rightText="저장"
        onClick={handleSaveButton}
        $isDisabled={isSaveDisabled}
      />
      <S.Form>
        <S.Label>경험의 제목을 적어주세요</S.Label>
        <S.InputContainer>
          <Input
            placeholder={getFormattedDate()}
            value={title}
            onChange={handleChangeTitle}
            isError={false}
            errorMessage={''}
          />
        </S.InputContainer>
        <S.Label>경험의 카테고리를 선택해주세요</S.Label>
        <S.InputContainer>
          <SelectBox
            select={category}
            onChange={handleChangeCategory}
            selectData={['카테고리1', '카테고리2', '카테고리3']}
          />
        </S.InputContainer>
        <S.Label>경험 기록</S.Label>
        <Memo memo={memo} onChange={handleChangeMemo} />
      </S.Form>
      {showModal && (
        <DetailModal
          text="작성 중인 내용을 임시 저장할까요?"
          description="새로 작성하면 기존 기록은 삭제돼요."
          leftButtonText="나가기"
          rightButtonText="저장하기"
          onClickBackground={() => setShowModal(false)}
          onClickLeft={clearTempMemo}
          onClickRight={restoreTempMemo}
        />
      )}
      {showTempDataModal && (
        <DetailModal
          text={`최근 작성 내용이 있어요\n이어서 작성하시겠어요?`}
          description="새로 작성하면 기존 기록은 모두 삭제돼요."
          leftButtonText="새로 작성하기"
          rightButtonText="이어서 작성하기"
          onClickBackground={() => setShowTempDataModal(false)}
          onClickLeft={() => {
            localStorage.removeItem('tempMemo');
            setShowTempDataModal(false);
          }}
          onClickRight={() => {
            restoreTempMemo();
            setShowTempDataModal(false);
          }}
        />
      )}
    </S.Container>
  );
};

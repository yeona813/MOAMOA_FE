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
  const [tempMemo, setTempMemo] = useState({
    title: '',
    category: '',
    memo: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [showTempDataModal, setShowTempDataModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('tempMemo', JSON.stringify(DUMMY_MEMO));
    const savedMemo = localStorage.getItem('tempMemo');
    if (savedMemo) {
      setTempMemo(JSON.parse(savedMemo));
      setShowTempDataModal(true);
    }
  }, []);

  const saveTempMemo = () => {
    const titleToSave = tempMemo.title || getFormattedDate();
    if (tempMemo.title && tempMemo.memo) {
      localStorage.setItem('tempMemo', JSON.stringify({
        ...tempMemo,
        title: titleToSave
      }));
    }
  };

  const handleBackButton = () => {
    if ((tempMemo.title || getFormattedDate()) && tempMemo.memo) {
      saveTempMemo();
      setShowModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTempMemo((prev) => ({ ...prev, title: newTitle }));
    saveTempMemo();
  };

  const handleChangeCategory = (value: string) => {
    setTempMemo((prev) => ({ ...prev, category: value }));
    saveTempMemo();
  };

  const handleChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = e.target.value;
    setTempMemo((prev) => ({ ...prev, memo: newMemo }));
    saveTempMemo();
  };

  const handleSaveButton = () => {
    const titleToSave = tempMemo.title || getFormattedDate();
    console.log('저장되었습니다.', {
      title: titleToSave,
      category: tempMemo.category,
      memo: tempMemo.memo
    });
    clearTempMemo();
  };

  const restoreTempMemo = () => {
    if (tempMemo) {
      setTempMemo(tempMemo);
    }
    setShowModal(false);
  };

  const clearTempMemo = () => {
    localStorage.removeItem('tempMemo');
    setShowModal(false);
    navigate('/');
  };

  const handleNewMemo = () => {
    localStorage.removeItem('tempMemo');
    setTempMemo({ title: '', category: '', memo: '' });
    setShowTempDataModal(false);
  };

  const isSaveDisabled = !tempMemo.title && !tempMemo.memo;

  return (
    <S.Container>
      <TabBar
        onClickBackIcon={handleBackButton}
        centerText="경험 기록"
        rightText="저장"
        onClick={handleSaveButton}
        isDisabled={isSaveDisabled}
      />
      <S.Form>
        <S.Label>경험의 제목을 적어주세요</S.Label>
        <S.InputContainer>
          <Input
            placeholder={getFormattedDate()}
            value={tempMemo.title}
            onChange={handleChangeTitle}
            isError={false}
          />
        </S.InputContainer>
        <S.Label>경험의 카테고리를 선택해주세요</S.Label>
        <S.InputContainer>
          <SelectBox
            select={tempMemo.category}
            onChange={handleChangeCategory}
            selectData={['카테고리1', '카테고리2', '카테고리3']}
          />
        </S.InputContainer>
        <S.Label>경험 기록</S.Label>
        <Memo memo={tempMemo.memo} onChange={handleChangeMemo} />
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
          onClickLeft={handleNewMemo}
          onClickRight={() => {
            restoreTempMemo();
            setShowTempDataModal(false);
          }}
        />
      )}
    </S.Container>
  );
};

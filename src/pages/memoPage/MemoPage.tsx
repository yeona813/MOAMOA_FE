import { ChangeEvent, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailModal } from '@components/common/modal/DetailModal';
import * as S from './MemoPage.Style';
import { getFormattedDate } from '@/utils/dateUtils';
import { SelectBox } from '@/components/common/selectbox/SelectBox';
import { Button } from '@/components/common/button/Button';
import { FolderBottomSheet } from '@/components/common/bottomSheet/FolderBottomSheet';

const DUMMY_MEMO = {
  title: '경쟁 서비스 기능',
  category: '큐시즘 서비스 기획',
  memo: '오늘은 큐시즘에서 서비스 기획을 했따',
};

export const MemoPage = () => {
  const navigate = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [tempMemo, setTempMemo] = useState({
    title: '',
    category: '',
    memo: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [showTempDataModal, setShowTempDataModal] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

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
      localStorage.setItem(
        'tempMemo',
        JSON.stringify({
          ...tempMemo,
          title: titleToSave,
        }),
      );
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
    if (value === '새 폴더 추가하기') {
      setIsBottomSheetOpen(true);
    } else {
      setTempMemo((prev) => ({ ...prev, category: value }));
      saveTempMemo();
    }
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
      memo: tempMemo.memo,
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

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '250px';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [tempMemo.memo]);

  const isSaveDisabled = !tempMemo.memo;

  function handleBottomSheetComplete(): void {
    setIsBottomSheetOpen(false);
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.BackButton onClick={handleBackButton} type="button">
          <img src="src/assets/icons/ArrowIcon.svg" alt="뒤로가기" />
        </S.BackButton>
        <S.Title>오늘은 무슨 경험을 하셨나요?<br />자유롭게 기록해주세요!</S.Title>
      </S.HeaderContainer>

      <S.Form>
        <S.Input
          placeholder={getFormattedDate()}
          value={tempMemo.title}
          onChange={handleChangeTitle}
          isError={false}
        />
        <S.Line />
        <S.Content
          ref={textareaRef}
          placeholder="경험 당시의 상황, 행동, 문제, 결과 등을 기록해주세요."
          value={tempMemo.memo}
          onChange={handleChangeMemo}
        />
        <S.Line />
        <S.Label>경험의 카테고리를 선택해주세요.</S.Label>
        <SelectBox
          select={tempMemo.category}
          onChange={handleChangeCategory}
          selectData={['큐시즘 서비스 기획', '마이리얼트립 인턴', '서비스디자인학과 팀 프로젝트', '회사문장', '새 폴더 추가하기']} // 백엔드에 저장되어 있는 폴더명 가져오기
          placeholder="선택하기"
        />
        <S.ButtonWrapper>
          <Button type="submit" onClick={handleSaveButton} styleType={'basic'} disabled={isSaveDisabled}>
            저장하기
          </Button>
        </S.ButtonWrapper>
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
      {isBottomSheetOpen && (
        <FolderBottomSheet
          onClick={() => setIsBottomSheetOpen(false)}
          onClickButton={handleBottomSheetComplete}
          title="새 폴더 추가하기"
          text="추가할 폴더의 이름을 적어주세요"
        />
      )}
    </S.Container>
  );
};

import { useState } from 'react';
import { Record } from '@/components/record/Record';
import { Input } from '@/components/common/input/Input';
import { SelectBox } from '@/components/common/selectbox/SelectBox';
import { Button } from '@/components/common/button/Button';
import { FolderBottomSheet } from '@/components/common/bottomSheet/FolderBottomSheet';
import * as S from './RecordCompletePage.Style';

const getFormattedDate = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}${month}${day}`;
};

export const RecordCompletePage = () => {
  const [recordSummary] = useState('오늘의 경험 요약입니다. 이곳에 간단한 경험 요약이 들어갑니다.');
  const [title, setTitle] = useState(getFormattedDate());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isClicked, setIsClicked] = useState(false); //isClicked 사용이 안되고 있어요!!
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false); // 바텀 시트 표시 상태

  const handleButtonClick = () => {
    setIsClicked(true);
  };

  // 카테고리 선택 처리
  const handleSelectCategory = (category: string) => {
    if (category === '폴더 추가하기') {
      setIsBottomSheetOpen(true); // 바텀 시트 열기
    } else {
      setSelectedCategory(category);
    }
  };

  // 바텀 시트의 완료 버튼 클릭 처리
  const handleBottomSheetComplete = () => {
    setIsBottomSheetOpen(false); // 바텀 시트 닫기
  };

  return (
    <S.Container>
      <S.Title>경험 기록이 완료되었어요!</S.Title>

      <S.SubTitle>경험 요약</S.SubTitle>
      <Record>{recordSummary}</Record>

      <S.SubTitle>경험의 제목을 적어주세요</S.SubTitle>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} isError={false} />
      <S.SubTitle>경험의 카테고리를 선택해주세요</S.SubTitle>
      <SelectBox
        select={selectedCategory}
        onChange={handleSelectCategory}
        selectData={['카테고리1', '카테고리2', '카테고리3', '폴더 추가하기']}
      />
      <S.ButtonContainer>
        <Button styleType="shadow" onClick={handleButtonClick} disabled={!selectedCategory}>
          저장하기
        </Button>
      </S.ButtonContainer>

      {/* 폴더 추가 바텀 시트 */}
      {isBottomSheetOpen && (
        <FolderBottomSheet
          onClick={() => setIsBottomSheetOpen(false)}
          onClickButton={handleBottomSheetComplete}
          text="폴더 이름을 입력하세요"
        />
      )}
    </S.Container>
  );
};

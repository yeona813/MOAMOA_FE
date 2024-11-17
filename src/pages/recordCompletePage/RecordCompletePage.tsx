import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CategoryChip } from '@/components/common/chip/CategoryChip';
import { Button } from '@/components/common/button/Button';
import { FolderBottomSheet } from '@/components/common/bottomSheet/FolderBottomSheet';
import * as S from './RecordCompletePage.Style';
import { getFormattedDate } from '@/utils/dateUtils';
import FolderIcon from '@icons/FolderIcon.svg';
import { getFolders } from '@/api/Folder';
import { FolderListProps } from '@/types/Folder';
import { postRecord } from '@/api/Record';

export const RecordCompletePage = () => {
  const [folders, setFolders] = useState<FolderListProps[]>([]);
  const [title, setTitle] = useState(getFormattedDate());
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const nickname = localStorage.getItem('nickname');

  useEffect(() => {
    console.log('받은 state 데이터:', state);

    if (state?.summary) {
      setContent(state.summary);
    }
    if (state?.title) {
      setTitle(state.title || getFormattedDate());
    }
  }, [state]);

  useEffect(() => {
    if (!isBottomSheetOpen) {
      const fetchFolders = async () => {
        const folderList = await getFolders();
        if (folderList) {
          setFolders(folderList);
        }
      };
      fetchFolders();
    }
  }, [isBottomSheetOpen]);

  const handleSaveButton = async () => {
    try {
      if (!state?.chatRoomId) {
        throw new Error('채팅방 ID가 없습니다.');
      }
      if (!selectedCategory) {
        throw new Error('카테고리를 선택해주세요.');
      }

      const folderId = folders.find(folder => folder.title === selectedCategory)?.folderId;
      if (!folderId) {
        throw new Error('유효하지 않은 폴더입니다.');
      }
      const response = await postRecord({
        title,
        content,
        folderId,
        recordType: 'CHAT',
        chatRoomId: state.chatRoomId
      });
      if (response?.is_success) {
        navigate('/home');
      }
    } catch (error) {
      alert('기록 저장에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleChangeCategory = (category: string, isAddFolder = false) => {
    if (isAddFolder) {
      setIsBottomSheetOpen(true);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isSaveDisabled = !state?.title || !state?.summary || !selectedCategory;

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>경험 기록이 완료되었어요!</S.Title>
        <S.SubTitle>
          {nickname}님의 경험을 모아서
          <br />
          한눈에 보기 쉽게 요약해드렸어요
        </S.SubTitle>
      </S.HeaderContainer>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder={getFormattedDate()}
          value={state?.title || title}
          onChange={handleChangeTitle}
          isError={false}
        />
        <S.Line />
        <S.TextArea value={state?.summary || content} onChange={handleChangeContent} />
        <S.Line />

        <S.Label>경험의 카테고리를 선택해주세요.</S.Label>
        <S.CategoryContainer>
          {folders.map((folder) => (
            <CategoryChip
              key={folder.folderId}
              children={folder.title}
              isSelected={selectedCategory === folder.title}
              onClick={() => handleChangeCategory(folder.title)}
            />
          ))}
          <CategoryChip
            onClick={() => handleChangeCategory('', true)}
            isSelected={false}
          >
            <img src={FolderIcon} alt="changeFolder" />
          </CategoryChip>
        </S.CategoryContainer>

        <S.ButtonWrapper>
          <Button
            type="submit"
            onClick={handleSaveButton}
            styleType="basic"
            disabled={isSaveDisabled}
          >
            저장하기
          </Button>
        </S.ButtonWrapper>
      </S.Form>

      {isBottomSheetOpen && (
        <FolderBottomSheet
          onClick={() => setIsBottomSheetOpen(false)}
        />
      )}
    </S.Container>
  );
};

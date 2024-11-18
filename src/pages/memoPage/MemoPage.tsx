import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { DetailModal } from '@components/common/modal/DetailModal';
import * as S from './MemoPage.Style';
import { getFormattedDate } from '@/utils/dateUtils';
import { Button } from '@/components/common/button/Button';
import { FolderBottomSheet } from '@/components/common/bottomSheet/FolderBottomSheet';
import BackIcon from '@icons/ArrowIcon.svg';
import FolderIcon from '@icons/FolderIcon.svg';
import { CategoryChip } from '@/components/common/chip/CategoryChip';
import { FolderListProps } from '@/types/Folder';
import { postRecord } from '@/api/Record';
import { getFolders } from '@/api/Folder';
import { getTempMemo, postTempMemo } from '@/api/Memo';
import ToastMessage from '@/components/chat/ToastMessage';

interface FolderType {
  folderId: number;
  title: string;
}

export const MemoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [folders, setFolders] = useState<FolderListProps[]>([]);
  const [tempMemo, setTempMemo] = useState({
    title: '',
    category: '',
    folderId: 0,
    memo: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [showTempDataModal, setShowTempDataModal] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [contentWarning, setContentWarning] = useState<string>('');

  useEffect(() => {
    // 폴더 조회
    if (!isBottomSheetOpen) {
      const fetchFolders = async () => {
        const folderList = await getFolders();
        if (folderList) {
          setFolders(folderList);
        }
      };
      fetchFolders();
    };
    // 임시 저장된 메모 조회
    const fetchTempMemo = async () => {
      try {
        const tempMemoData = await getTempMemo();
        if (tempMemoData.isExist) {
          setTempMemo({
            title: tempMemoData.title || '',
            category: '',
            folderId: 0,
            memo: tempMemoData.content || '',
          });
          setShowTempDataModal(true);
        }
      } catch (error) {
      }
    };
    fetchTempMemo(); // 페이지 로드 시 임시 메모 조회

    // 메모 기록 세부 조회
    if (location.state?.memoData) {
      const memoData = location.state.memoData;
      setTempMemo({
        title: memoData.title || '',
        category: '',
        folderId: memoData.folderId || 0,
        memo: memoData.content || '',
      });
    }
  }, [isBottomSheetOpen, location.state]);

  const handleBackButton = () => {
    if ((tempMemo.title || getFormattedDate()) && tempMemo.memo) {
      setShowModal(true);
    } else {
      navigate(-1);
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTempMemo((prev) => ({ ...prev, title: newTitle }));
  };

  const handleChangeCategory = (category: string, folder?: FolderType) => {
    if (!folder) {
      setIsBottomSheetOpen(true);
      return;
    }
    setTempMemo(prev => ({
      ...prev,
      category,
      folderId: folder.folderId
    }));
  };

  const handleChangeMemo = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMemo = e.target.value;
    setTempMemo((prev) => ({ ...prev, memo: newMemo }));

    if (newMemo.length < 50) {
      setContentWarning('50자 이상 입력해주세요.');
    } else {
      setContentWarning('');
    }
  };

  const handleSaveButton = async () => {
    try {
      const response = await postRecord({
        title: tempMemo.title || getFormattedDate(),
        content: tempMemo.memo,
        folderId: tempMemo.folderId,
        recordType: 'MEMO',
      });
      if (response) {
        clearTempMemo();
        navigate('/');
      }
      if (!tempMemo.memo) {
        alert('내용을 입력해주세요.');
        return;
      }
    } catch (error: any) {
      throw error;
    }
  }

  const saveTempMemo = async () => {
    try {
      await postTempMemo(tempMemo.title || getFormattedDate(), tempMemo.memo);
      setShowModal(false);
      navigate('/');
    } catch (error) {
      throw error;
    }
  };

  const clearTempMemo = () => {
    setTempMemo({ title: '', category: '', folderId: 0, memo: '' });
    setShowModal(false);
    navigate('/');
  };

  const handleNewMemo = () => {
    setTempMemo({ title: '', category: '', folderId: 0, memo: '' });
    setShowTempDataModal(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isSaveDisabled = !tempMemo.memo;

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.BackButton onClick={handleBackButton} type="button">
          <img src={BackIcon} alt="뒤로가기" />
        </S.BackButton>
        <S.Title>
          오늘은 무슨 경험을 하셨나요?
          <br />
          자유롭게 기록해주세요!
        </S.Title>
      </S.HeaderContainer>

      <S.Form onSubmit={handleSubmit}>
        <S.Input
          placeholder={getFormattedDate()}
          value={tempMemo.title}
          onChange={handleChangeTitle}
          isError={false}
        />
        <S.Line />
        <S.Content
          placeholder={`어떤 상황에서 무엇을 했나요? 결과는 어땠나요?\n\n일단 기록해 보세요!\n음성으로 입력하거나 오타를 내도 괜찮아요.\n모아모아가 알아서 정리해드려요.`}
          value={tempMemo.memo}
          onChange={handleChangeMemo}
          maxLength={500}
        />
        <S.WarningCountContainer>
          {contentWarning && <S.Warning>{contentWarning}</S.Warning>}
          <S.Count>{tempMemo.memo.length}/500</S.Count>
        </S.WarningCountContainer>
        <S.Line />
        <S.Label>경험 폴더를 선택해주세요.</S.Label>
        <S.CategoryContainer>
          {folders.map((folder) => (
            <CategoryChip
              key={folder.folderId}
              children={folder.title}
              isSelected={tempMemo.category === folder.title}
              onClick={() => handleChangeCategory(folder.title, folder)}
            />
          ))}
          <CategoryChip
            onClick={() => handleChangeCategory('', undefined)}
            isSelected={false}
          >
            <img src={FolderIcon} alt="changeFolder" />
          </CategoryChip>
        </S.CategoryContainer>
        <S.ButtonWrapper>
          <Button
            type="button"
            onClick={handleSaveButton}
            styleType={'basic'}
            disabled={isSaveDisabled}
          >
            저장하기
          </Button>
        </S.ButtonWrapper>
      </S.Form>
      {showTempDataModal && (
        <DetailModal
          text={`최근 작성 내용이 있어요\n이어서 작성하시겠어요?`}
          description="새로 작성하면 기존 기록은 모두 삭제돼요."
          leftButtonText="새로 작성하기"
          rightButtonText="이어서 작성하기"
          onClickBackground={() => setShowTempDataModal(false)}
          onClickLeft={handleNewMemo}
          onClickRight={() => {
            setShowTempDataModal(false);
          }}
        />
      )}
      {showModal && (
        <DetailModal
          text="작성 중인 내용을 임시 저장할까요?"
          description="새로 작성하면 기존 기록은 삭제돼요."
          leftButtonText="나가기"
          rightButtonText="저장하기"
          onClickBackground={() => setShowModal(false)}
          onClickLeft={clearTempMemo}
          onClickRight={saveTempMemo}
        />
      )}
      {showToast && <ToastMessage text="경험이 임시저장 되었어요" onClose={() => setShowToast(false)} />}
      {isBottomSheetOpen && (
        <FolderBottomSheet
          onClick={() => setIsBottomSheetOpen(false)}
        />
      )}
    </S.Container>
  );
};

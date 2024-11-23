import { useEffect, useState } from 'react';
import { Button } from '../button/Button';
import { BottomSheet } from '../bottomSheet/BottomSheet';
import * as S from './FolderChangePopUp.Style';
import { SelectBox } from '../selectbox/SelectBox';
import CloseIcon from '@icons/CloseIcon.svg';
import { getFolders } from '@/api/Folder';
import { FolderListProps } from '@/types/Folder';
import { patchFolder } from '@/api/Analysis';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Modal } from '../modal/Modal';

interface FolderPopUpProps {
  recordId: number;
  intialfolderName: string;
  onClick: () => void;
  showToast: () => void;
}

/**
 *
 * @param recordId - recordId
 * @param intialfolderName - 기존 folderName
 * @param onClick - BottomSheet 열고 닫는 함수
 * @param showToast - 저장 완료 후 toast 보여주는 함수
 * @returns
 */
export const FolderChangePopUp = ({
  recordId,
  intialfolderName,
  onClick,
  showToast,
}: FolderPopUpProps) => {
  const [folderName, setFolderName] = useState(intialfolderName);
  const [folderList, setFolderList] = useState<FolderListProps[]>([]);

  const isMobile = useMediaQuery('(max-width: 1280px)');

  useEffect(() => {
    const fetchFolderList = async () => {
      const folderList = await getFolders();
      if (folderList) {
        setFolderList(folderList);
      }
    };

    fetchFolderList();
  }, []);

  const changeSelect = (folder: string) => {
    setFolderName(folder);
  };

  const handleSubmit = async () => {
    if (folderName) {
      try {
        const response = await patchFolder({
          recordId: recordId,
          folder: folderName,
        });

        if (response.is_success) {
          onClick();
          showToast();
        }
      } catch (error) {
        console.error('폴더 변경 실패:', error);
      }
    }
  };

  const Content = (
    <>
      <S.Header>
        <S.Title>경험 폴더 변경하기</S.Title>
        <S.Icon src={CloseIcon} alt="closeIcon" onClick={onClick} />
      </S.Header>
      <S.SheetContent>
        저장할 폴더를 선택해주세요
        <SelectBox select={folderName} onChange={changeSelect} selectData={folderList} />
        <Button styleType="basic" disabled={!folderName} onClick={handleSubmit}>
          완료
        </Button>
      </S.SheetContent>
    </>
  );

  return (
    <>
      {isMobile ? (
        <BottomSheet onClick={onClick}>{Content}</BottomSheet>
      ) : (
        <Modal onClick={onClick} isPC={true}>
          {Content}
        </Modal>
      )}
    </>
  );
};

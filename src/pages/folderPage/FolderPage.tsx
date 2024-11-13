import { useEffect, useState } from 'react';
import { Folder } from '@components/folder/Folder';
import { TabBar } from '@components/layout/tabBar/TabBar';
import * as S from './FolderPage.Style';
import { FolderBottomSheet } from '@components/common/bottomSheet/FolderBottomSheet';
import { DetailModal } from '@components/common/modal/DetailModal';
import DeleteIcon from '@icons/DeleteIcon.svg';
import PlusIcon from '@icons/PlusIcon.svg';
import { getFolders } from '@/api/Folder';
import { FolderListProps } from '@/types/Folder';

export const FolderPage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [folderList, setFolderList] = useState<FolderListProps[]>([]);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const folderList = await getFolders();
      if (folderList) {
        setFolderList(folderList);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <TabBar centerText="폴더 관리" rightText="편집" onClick={handleEdit} />
      <S.Content>
        {!isEditing && (
          <Folder type="plus" onClick={toggleBottomSheet}>
            <img src={PlusIcon} alt="plusButton" />
          </Folder>
        )}
        {folderList.length > 0 &&
          folderList.map((folder) => (
            <S.FolderContainer key={folder.folderId}>
              {isEditing && <S.Icon src={DeleteIcon} alt="delete" onClick={toggleModal} />}
              <Folder type="folder">
                <h6>{folder.title}</h6>
              </Folder>
            </S.FolderContainer>
          ))}
      </S.Content>
      {openBottom && (
        <FolderBottomSheet
          onClick={toggleBottomSheet}
          title="새 폴더 추가하기"
          text="추가할 폴더의 이름을 적어주세요."
        />
      )}
      {openModal && (
        <DetailModal
          text="폴더를 삭제 하시겠어요?"
          description="폴더 내 모든 레코드도 함께 삭제됩니다."
          leftButtonText="돌아가기"
          rightButtonText="삭제하기"
          onClickBackground={toggleModal}
          onClickLeft={toggleModal}
          onClickRight={() => {
            console.log('delete 구현 해야함~');
          }}
        />
      )}
    </div>
  );
};

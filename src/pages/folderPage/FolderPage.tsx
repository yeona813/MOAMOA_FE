import { useState } from 'react';
import { List } from '../../components/folder/list/List';
import { Header } from '../../components/layout/header/Header';
import { TabBar } from '../../components/layout/tabBar/TabBar';
import * as S from './FolderPageStyle';
import { FolderBottomSheet } from '../../components/common/bottomSheet/FolderBottomSheet';
import { DetailModal } from '../../components/common/modal/DetailModal';

const FOLDER_DATA = ['큐시즘 밋업', '프로젝트 공모전', '아르바이트'] as string[];

export const FolderPage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div>
      <Header isTabBar={true}>
        <TabBar centerText="폴더 관리" rightText="편집" onClick={handleEdit} />
      </Header>
      <S.Content>
        {FOLDER_DATA.length > 0 &&
          FOLDER_DATA.map((folder) => (
            <S.ListContainer key={folder}>
              {isEditing && (
                <S.Icon src="/icons/DeleteIcon.svg" alt="delete" onClick={toggleModal} />
              )}
              <List type="folder">
                <h6>{folder}</h6>
              </List>
            </S.ListContainer>
          ))}
        {!isEditing && (
          <List type="plus" onClick={toggleBottomSheet}>
            <img src="/icons/PlusIcon.svg" alt="plusButton" />
          </List>
        )}
      </S.Content>
      {openBottom && <FolderBottomSheet onClick={toggleBottomSheet} />}
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

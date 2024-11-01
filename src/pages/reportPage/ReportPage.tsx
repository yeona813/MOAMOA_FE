import { useState } from 'react';
import { Header } from '../../components/layout/header/Header';
import { TabBar } from '../../components/layout/tabBar/TabBar';
import { Content } from '../../components/report/content/Content';
import { EditBottomSheet } from '../../components/common/bottomSheet/EditBottomSheet';
import { BasicModal } from '../../components/common/modal/BasicModal';
import { FolderBottomSheet } from '../../components/common/bottomSheet/FolderBottomSheet';

export const ReportPage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openChangeBottom, setOpenChangeBottom] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const togleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleModal = () => {
    setOpenBottom(false);
    setOpenDelete((prev) => !prev);
  };

  const toggleChangeFoler = () => {
    setOpenBottom(false);
    setOpenChangeBottom((prev) => !prev);
  };

  const toggleEdit = () => {
    setOpenBottom(false);
    setIsEdit(true);
  };

  const onClickBackIcon = () => {
    setIsEdit(false);
  };

  return (
    <>
      <Header isTabBar={true}>
        <TabBar
          centerText="역량 레포트"
          icon={!isEdit ? '/icons/KebabIcon.svg' : undefined}
          onClick={togleBottomSheet}
          onClickBackIcon={isEdit ? onClickBackIcon : undefined}
        />
      </Header>
      <Content isEdit={isEdit} />
      {openBottom && (
        <EditBottomSheet
          onClick={togleBottomSheet}
          onClickEdit={toggleEdit}
          onClickDelete={toggleModal}
          onClickChange={toggleChangeFoler}
        />
      )}
      {openDelete && (
        <BasicModal
          text="역량 레포트를 삭제하시겠어요?"
          leftButtonText="돌아가기"
          rightButtonText="삭제하기"
          onClickBackground={toggleModal}
          onClickLeft={toggleModal}
          onClickRight={() => {
            console.log('여기 구현해야함');
          }}
        />
      )}
      {openChangeBottom && (
        <FolderBottomSheet
          onClick={toggleChangeFoler}
          onClickButton={() => {
            console.log('구현해야함');
          }}
          text="저장할 폴더를 선택해주세요"
          isSelectBox={true}
        />
      )}
    </>
  );
};

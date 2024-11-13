import { useEffect, useState } from 'react';
import { ListHeader } from '@components/list/header/Header';
import { Content } from '@components/list/content/Content';
import * as S from './ListPage.Style';
import { RecordBottomSheet } from '@components/common/bottomSheet/RecordBottomSheet';
import { SideBar } from '@/components/common/sideBar/SideBar';
import { FloatingButton } from '@/components/common/button/FloatingButton';
import { getFolderLists, getFolders } from '@/api/Folder';
import { FolderListProps, ListProps } from '@/types/Folder';

//@TODO
// 1. 닉네임을 백에서 직접 받아와서 Header에 처리해야한다!
// 2. 경험 리스트가 아예 없을 때 에러 없이 되는지 또 다시 한번 확인하기!

export const ListPage = () => {
  const [selectFolder, setSelectFolder] = useState('');
  //const [lastRecordId, setLastRecordId] = useState(0);
  const [openBottom, setOpenBottom] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [folderList, setFolderList] = useState<FolderListProps[]>([]);
  const [listData, setListData] = useState<ListProps[]>([]);

  const handleSelectFolder = (folderName: string) => {
    setSelectFolder(folderName);
  };

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const folderList = await getFolders();
      if (folderList) {
        setFolderList(folderList);
      }

      const listData = await getFolderLists(selectFolder);
      if (listData) {
        setListData(listData);
      }
    };

    fetchUser();
  }, [selectFolder]);

  return (
    <S.ListPage>
      <ListHeader
        nickname="코코"
        folderData={folderList}
        selectFolder={selectFolder}
        onClick={handleSelectFolder}
        onClickSideBar={toggleSideBar}
      />
      <Content listData={listData} />
      <FloatingButton onClick={toggleBottomSheet} />
      {openBottom && <RecordBottomSheet onClick={toggleBottomSheet} />}
      {openSideBar && <SideBar onClick={toggleSideBar} />}
    </S.ListPage>
  );
};

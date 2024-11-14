import { useCallback, useEffect, useRef, useState } from 'react';
import { ListHeader } from '@components/list/header/Header';
import { Content } from '@components/list/content/Content';
import * as S from './ListPage.Style';
import { RecordBottomSheet } from '@components/common/bottomSheet/RecordBottomSheet';
import { SideBar } from '@/components/common/sideBar/SideBar';
import { FloatingButton } from '@/components/common/button/FloatingButton';
import { getFolderLists, getFolders } from '@/api/Folder';
import { FolderListProps, ListProps } from '@/types/Folder';

export const ListPage = () => {
  const [selectFolder, setSelectFolder] = useState('all');
  const [lastRecordId, setLastRecordId] = useState(0);
  const [openBottom, setOpenBottom] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [folderList, setFolderList] = useState<FolderListProps[]>([]);
  const [listData, setListData] = useState<ListProps[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  // 폴더 데이터 및 리스트 데이터 가져오기
  const getFolderData = async (folder: string, recordId: number) => {
    setIsFetching(true);
    try {
      const listResponse = await getFolderLists(folder, recordId);
      if (listResponse.recordDtoList) {
        setListData((prev) =>
          recordId === 0 ? listResponse.recordDtoList : [...prev, ...listResponse.recordDtoList],
        );
        setLastRecordId(listResponse.recordDtoList[listResponse.recordDtoList.length - 1].recordId);
        setHasNext(listResponse.hasNext);
      } else {
        setHasNext(false);
      }
    } finally {
      setIsFetching(false);
    }
  };

  // 폴더 목록 가져오기
  const fetchFolderList = async () => {
    const folderResponse = await getFolders();
    if (folderResponse) setFolderList(folderResponse);
  };

  // 초기 데이터 로드
  useEffect(() => {
    fetchFolderList();
    getFolderData(selectFolder, 0);
  }, [selectFolder]);

  // 무한 스크롤 데이터 로드
  const fetchMoreData = useCallback(async () => {
    if (isFetching || !hasNext) return;
    await getFolderData(selectFolder, lastRecordId);
  }, [selectFolder, lastRecordId, hasNext, isFetching]);

  // Intersection Observer 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          fetchMoreData();
        }
      },
      { rootMargin: '200px', threshold: 0.1 },
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchMoreData, isFetching]);

  const handleSelectFolder = useCallback((folderName: string) => {
    setSelectFolder(folderName);
    setListData([]);
    setLastRecordId(0);
  }, []);

  const handleToggleBottomSheet = useCallback(() => {
    setOpenBottom((prev) => !prev);
  }, []);

  const handleToggleSideBar = useCallback(() => {
    setOpenSideBar((prev) => !prev);
  }, []);

  return (
    <S.ListPage>
      <ListHeader
        nickname="코코"
        folderData={folderList}
        selectFolder={selectFolder}
        onClick={handleSelectFolder}
        onClickSideBar={handleToggleSideBar}
      />
      <S.Content>
        <Content listData={listData} />
        <div ref={observerRef} style={{ height: '20px' }} />
      </S.Content>
      <FloatingButton onClick={handleToggleBottomSheet} />
      {openBottom && <RecordBottomSheet onClick={handleToggleBottomSheet} />}
      {openSideBar && <SideBar onClick={handleToggleSideBar} />}
    </S.ListPage>
  );
};

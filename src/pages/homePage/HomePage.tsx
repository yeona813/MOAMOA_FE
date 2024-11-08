import { useState } from 'react';
import { HomeHeader } from '@components/home/header/Header';
import { Content } from '@components/home/content/Content';
import { RecordBottomSheet } from '@components/common/bottomSheet/RecordBottomSheet';
import { SideBar } from '@/components/common/sideBar/SideBar';

export const HomePage = () => {
  const [openBottom, setOpenBottom] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  const toggleSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };

  return (
    <>
      <HomeHeader onClick={toggleBottomSheet} onClickSideBar={toggleSideBar} />
      <Content />
      {openBottom && <RecordBottomSheet onClick={toggleBottomSheet} />}
      {openSideBar && <SideBar onClick={toggleSideBar} />}
    </>
  );
};

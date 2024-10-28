import { useState } from 'react';
import { Header } from '../../components/home/header/Header';
import { Content } from '../../components/home/content/Content';
import { Footer } from '../../components/layout/footer/Footer';
import { RecordBottomSheet } from '../../components/common/bottomSheet/RecordBottomSheet';

export const HomePage = () => {
  const [openBottom, setOpenBottom] = useState(false);

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  return (
    <>
      <Header onClick={toggleBottomSheet} />
      <Content />
      <Footer />
      {openBottom && <RecordBottomSheet onClick={toggleBottomSheet} />}
    </>
  );
};

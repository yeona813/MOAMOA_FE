import { useState } from 'react';
import { Header } from '../../components/list/header/Header';
import { Footer } from '../../components/layout/footer/Footer';
import { Content } from '../../components/list/content/Content';
import * as S from './ListPageStyle';
import { RecordBottomSheet } from '../../components/common/bottomSheet/RecordBottomSheet';

//@TODO
// 1. 닉네임을 백에서 직접 받아와서 Header에 처리해야한다!
// 2. 경험 리스트가 아예 없을 때 에러 없이 되는지 또 다시 한번 확인하기!

const FOLDERDATA = ['전체', '밋업 프로젝트'];
export const ListPage = () => {
  const [selectFolder, setSelectFolder] = useState('전체');
  const [openBottom, setOpenBottom] = useState(false);

  const handleSelectFolder = (folderName: string) => {
    setSelectFolder(folderName);
  };

  const toggleBottomSheet = () => {
    setOpenBottom((prev) => !prev);
  };

  return (
    <S.ListPage>
      <Header
        nickname="코코"
        folderData={FOLDERDATA}
        selectFolder={selectFolder}
        onClick={handleSelectFolder}
      />
      <Content onClick={toggleBottomSheet} />
      <Footer />
      {openBottom && <RecordBottomSheet onClick={toggleBottomSheet} />}
    </S.ListPage>
  );
};

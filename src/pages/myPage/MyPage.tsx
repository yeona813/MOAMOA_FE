import { useState } from 'react';
import { Profile } from '../../components/my/profile/Profile';
import { Settings } from '../../components/my/settings/Settings';
import { BasicModal } from '../../components/common/modal/BasicModal';
import { DetailModal } from '../../components/common/modal/DetailModal';
import { ConfirmModal } from '../../components/common/modal/ConfirmModal';
import { Header } from '../../components/layout/header/Header';
import { Footer } from '../../components/layout/footer/Footer';

export const MyPage = () => {
  const [logout, setLogout] = useState(false);
  const [deleteId, setDeleteId] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const toggleLogout = () => {
    setLogout((prev) => !prev);
  };

  const toggleDeleteId = () => {
    setDeleteId((prev) => !prev);
  };

  const toggleConfirmDelete = () => {
    setConfirmDelete((prev) => !prev);
  };

  const checkDelete = () => {
    setConfirmDelete(true);
    setDeleteId(false);
  };

  return (
    <>
      <Header isTabBar={false}>마이페이지</Header>
      <Profile />
      <Settings onClickLogout={toggleLogout} onClickDeleteId={toggleDeleteId} />
      <Footer />
      {logout && (
        <BasicModal
          text="로그아웃 하시겠어요?"
          leftButtonText="로그아웃하기"
          rightButtonText="돌아가기"
          onClickBackground={toggleLogout}
          onClickLeft={() => {
            console.log('로그아웃 함수 만들어야함~!');
          }}
          onClickRight={toggleLogout}
        />
      )}
      {deleteId && (
        <DetailModal
          text="정말 코어레코드를 탈퇴하시겠어요?"
          description="탈퇴 시, 모든 기록이 사라지며 복구할 수 없어요."
          leftButtonText="탈퇴하기"
          rightButtonText="돌아가기"
          onClickBackground={toggleDeleteId}
          onClickLeft={checkDelete}
          onClickRight={toggleDeleteId}
        />
      )}
      {confirmDelete && <ConfirmModal onClick={toggleConfirmDelete} />}
    </>
  );
};

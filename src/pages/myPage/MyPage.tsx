import { useState } from 'react';
import { Header } from '../../components/my/header/Header';
import { Profile } from '../../components/my/profile/Profile';
import { Settings } from '../../components/my/settings/Settings';
import { LogoutModal } from '../../components/common/modal/LogoutModal';
import { DeleteIdModal } from '../../components/common/modal/DeleteIdModal';
import { ConfirmModal } from '../../components/common/modal/ConfirmModal';

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
      <Header />
      <Profile />
      <Settings onClickLogout={toggleLogout} onClickDeleteId={toggleDeleteId} />
      {logout && <LogoutModal onClick={toggleLogout} />}
      {deleteId && <DeleteIdModal onClick={toggleDeleteId} onClickDeleteId={checkDelete} />}
      {confirmDelete && <ConfirmModal onClick={toggleConfirmDelete} />}
    </>
  );
};

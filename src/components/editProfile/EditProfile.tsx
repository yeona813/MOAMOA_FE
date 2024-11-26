import { useEffect, useState } from 'react';
import { Input } from '../common/input/Input';
import { SelectBox } from '../common/selectbox/SelectBox';
import * as S from './EditProfile.Style';
import { getUsers } from '@/api/My';

interface EditProfileProps {
  nickname: string;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  select: string;
  onChangeSelect: (select: string) => void;
  selectData: string[];
  isError: boolean;
  errorMessage: string;
}

export const EditProfile = ({
  nickname,
  onChangeNickname,
  select,
  onChangeSelect,
  selectData,
  isError,
  errorMessage,
}: EditProfileProps) => {
  const [initialData, setInitialData] = useState({ nickname: '', status: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUsers();
      if (userData) {
        setInitialData({
          nickname: userData.nickname,
          status: userData.status,
        });
      }
    };

    fetchUser();
  }, []);

  return (
    <S.EditProfile>
      <S.Edit>
        <S.Title>닉네임 변경</S.Title>
        <Input
          placeholder={initialData.nickname}
          value={nickname}
          onChange={onChangeNickname}
          required
          maxLength={10}
          isError={isError}
          errorMessage={errorMessage}
        />
      </S.Edit>
      <S.Edit>
        <S.Title>소속 변경</S.Title>
        <SelectBox
          select={select}
          onChange={onChangeSelect}
          statusData={selectData}
          placeholder={initialData.status}
        />
      </S.Edit>
    </S.EditProfile>
  );
};

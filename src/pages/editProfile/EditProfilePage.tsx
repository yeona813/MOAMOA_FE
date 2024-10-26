import { ChangeEvent, useEffect, useState } from 'react';
import { Button } from '../../components/common/button/Button';
import { TabBar } from '../../components/layout/tabBar/TabBar';
import * as S from './EditProfilePageStyle';
import { EditProfile } from '../../components/editProfile/EditProfile';

//@TODO
// 1. 닉네임 에러처리
// 2. 백엔드 요청

export const EditProfilePage = () => {
  const [submit, setSubmit] = useState(true);
  const [select, setSelect] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    if (nickname !== '' && select !== '') {
      setSubmit(false);
    }
  }, [nickname, select]);

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSelectChange = (select: string) => {
    setSelect(select);
  };

  return (
    <div>
      <S.Header>
        <TabBar centerText="프로필 수정" />
      </S.Header>
      <S.Content>
        <EditProfile
          nickname={nickname}
          onChangeNickname={handleChangeNickname}
          select={select}
          onChangeSelect={handleSelectChange}
        />
        <S.ButtonStyle>
          <Button
            $styleType="basic"
            disabled={submit}
            onClick={() => {
              console.log('제출처리 해야함');
            }}
          >
            저장하기
          </Button>
        </S.ButtonStyle>
      </S.Content>
    </div>
  );
};

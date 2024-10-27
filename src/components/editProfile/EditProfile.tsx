import { Input } from '../common/input/Input';
import { SelectBox } from '../common/selectbox/SelectBox';
import * as S from './EditProfileStyle';

interface EditProfileProps {
  nickname: string;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  select: string;
  onChangeSelect: (select: string) => void;
  selectData: string[];
}

export const EditProfile = ({
  nickname,
  onChangeNickname,
  select,
  onChangeSelect,
  selectData,
}: EditProfileProps) => {
  return (
    <S.EditProfile>
      <S.Edit>
        <S.Title>닉네임 변경</S.Title>
        <Input
          placeholder="변경할 닉네임을 입력해주세요"
          value={nickname}
          onChange={onChangeNickname}
        />
      </S.Edit>
      <S.Edit>
        <S.Title>소속 변경</S.Title>
        <SelectBox select={select} onChange={onChangeSelect} selectData={selectData} />
      </S.Edit>
    </S.EditProfile>
  );
};

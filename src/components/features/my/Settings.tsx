import { SettingItem } from './SettingItem';
import * as S from './SettingsStyle';

export const Settings = () => {
  return (
    <S.Container>
      <S.Content>
        <SettingItem
          onClick={() => {
            console.log('개인정보처리방침 노션으로 바꾸기');
          }}
        >
          개인정보처리방침
        </SettingItem>
        <SettingItem
          onClick={() => {
            console.log('이용약관 노션으로 바꾸기');
          }}
        >
          이용약관
        </SettingItem>
      </S.Content>
      <S.Content>
        <SettingItem
          onClick={() => {
            console.log('메롱');
          }}
        >
          로그아웃
        </SettingItem>
        <SettingItem
          description="게시된 정보가 다 사라져요"
          onClick={() => {
            console.log('메롱');
          }}
        >
          회원탈퇴
        </SettingItem>
      </S.Content>
    </S.Container>
  );
};

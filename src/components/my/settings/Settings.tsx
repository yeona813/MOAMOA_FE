import { SettingItem } from './SettingItem';
import * as S from './SettingsStyle';

const POLICY_DATA = [
  { title: '개인정보처리방침', url: 'www.naver.com' }, // 노션 링크로 수정 필요
  { title: '이용약관', url: 'www.naver.com' }, // 노션 링크로 수정 필요
];

export const Settings = () => {
  const goToLink = (url: string) => {
    return () => {
      window.location.href = url;
    };
  };

  return (
    <S.Container>
      <S.Content>
        {POLICY_DATA.map((item, index) => (
          <SettingItem key={index} onClick={() => goToLink(item.url)}>
            {item.title}
          </SettingItem>
        ))}
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

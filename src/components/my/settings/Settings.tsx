import { SettingItem } from './SettingItem';
import * as S from './Settings.Style';

const POLICY_DATA = [
  {
    title: '개인정보처리방침',
    url: 'https://spiny-lake-7e5.notion.site/f49d26665f464e3cb486a6a2f97b31ba?pvs=4',
  },
  {
    title: '이용약관',
    url: 'https://spiny-lake-7e5.notion.site/e9bfdb6c0c9247799dfc1fc1be55da65?pvs=4',
  },
];
interface SettingsProps {
  onClickLogout: () => void;
  onClickDeleteId: () => void;
}

export const Settings = ({ onClickLogout, onClickDeleteId }: SettingsProps) => {
  const goToLink = (url: string) => {
    return () => {
      window.open(url, '_blank');
    };
  };

  return (
    <S.Container>
      <S.Content>
        {POLICY_DATA.map((item, index) => (
          <SettingItem key={index} onClick={goToLink(item.url)}>
            {item.title}
          </SettingItem>
        ))}
      </S.Content>
      <S.Content>
        <SettingItem onClick={onClickLogout}>로그아웃</SettingItem>
        <SettingItem onClick={onClickDeleteId}>회원탈퇴</SettingItem>
      </S.Content>
    </S.Container>
  );
};

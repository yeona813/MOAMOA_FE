import * as S from './SettingItem.Style';
import RightArrowIcon from '@icons/RightArrowIcon.svg';

interface SettingItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const SettingItem = ({ children, onClick }: SettingItemProps) => {
  return (
    <S.Item onClick={onClick}>
      <S.Text>{children}</S.Text>
      <S.Icon src={RightArrowIcon} alt="rightArrow" />
    </S.Item>
  );
};

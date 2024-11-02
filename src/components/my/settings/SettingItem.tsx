import * as S from './SettingItemStyle';
import RightArrowIcon from '@icons/RightArrowIcon.svg';

interface SettingItemProps {
  children: React.ReactNode;
  description?: string;
  onClick: () => void;
}

export const SettingItem = ({ children, description, onClick }: SettingItemProps) => {
  return (
    <S.Item>
      <S.TextContainer>
        <S.Text>{children}</S.Text>
        {description && <S.Description>{description}</S.Description>}
      </S.TextContainer>
      <S.Icon src={RightArrowIcon} alt="rightArrow" onClick={onClick} />
    </S.Item>
  );
};

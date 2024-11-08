import * as S from './Header.style';
import MenuIcon from '@icons/MenuIcon.svg';

interface HeaderProps {
  onClick: () => void;
}

/**
 *
 * @param onClick - 햄버거 버튼 클릭 시 수행해야 하는 함수
 * @returns
 */
export const Header = ({ onClick }: HeaderProps) => {
  return (
    <S.Header>
      <S.Icon src={MenuIcon} alt="사이드바 햄버거 버튼" onClick={onClick} />
    </S.Header>
  );
};

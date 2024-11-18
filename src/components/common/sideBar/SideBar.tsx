import { Portal } from '../portal/Portal';
import * as S from './SideBar.style';
import { SideBarItem } from './SideBarItem';

interface SideBarProps {
  onClick?: () => void;
}

export const SideBar = ({ onClick }: SideBarProps) => {
  return (
    <Portal>
      <S.Background onClick={onClick}>
        <SideBarItem />
      </S.Background>
    </Portal>
  );
};

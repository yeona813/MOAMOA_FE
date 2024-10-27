import * as S from './HeaderStyle';

interface HeaderProps {
  children: React.ReactNode;
  isTabBar: boolean;
}

export const Header = ({ children, isTabBar }: HeaderProps) => {
  return <S.Header $isTabBar={isTabBar}>{children}</S.Header>;
};

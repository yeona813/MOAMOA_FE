import * as S from './HeaderStyle';

interface HeaderProps {
  children: React.ReactNode;
  isTabBar: boolean;
}

/**
 *
 * @param isTabBar - TabBar의 유무
 * @returns
 */
export const Header = ({ children, isTabBar }: HeaderProps) => {
  return <S.Header $isTabBar={isTabBar}>{children}</S.Header>;
};

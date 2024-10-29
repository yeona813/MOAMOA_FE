import * as S from './ListStyle';

interface ListProps {
  children: React.ReactNode;
  type: 'folder' | 'plus';
  onClick?: () => void;
}

export const List = ({ children, type, onClick }: ListProps) => {
  return (
    <S.List $type={type} onClick={onClick}>
      {children}
    </S.List>
  );
};

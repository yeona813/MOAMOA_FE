import { useNavigate } from 'react-router-dom';
import * as S from './SheetItem.Style';

export interface SheetItemProps {
  title: string;
  subTitle: string;
  color: 'blue' | 'yellow';
  path: string;
  onClick?: () => void;
}

/**
 *
 * @param title - 제목
 * @param subTitle - 부제목
 * @param color - SheetItem의 색깔
 * @param path - 이동할 주소
 * @param onClick - 클릭 시 실행할 함수
 * @returns
 */
export const SheetItem = ({ title, subTitle, color, path, onClick }: SheetItemProps) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    if (onClick) {
      await onClick();
    }
    navigate(path);
  };

  return (
    <S.SheetItem onClick={onClick && handleClick}>
      <S.DIV color={color} />
      <S.TextContainer>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Title>{title}</S.Title>
      </S.TextContainer>
    </S.SheetItem>
  );
};

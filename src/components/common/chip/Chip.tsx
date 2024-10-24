import * as S from './ChipStyle';

interface ChipProps {
  children: React.ReactNode;
  color?: boolean;
}

/**
 *
 * @param children - chip에 들어갈 글씨
 * @param color - (optional) true일 경우 노란색
 * @returns
 */
export const Chip = ({ children, color }: ChipProps) => {
  return <S.Chip color={color}>{children}</S.Chip>;
};

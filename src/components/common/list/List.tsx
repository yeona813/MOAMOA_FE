import { Chip } from '../chip/Chip';
import * as S from './ListStyle';

interface ListProps {
  folderText?: string;
  title: string;
  chips: string[];
  date: string;
  onClick: () => void;
  type: 'small' | 'large';
}

/**
 *
 * @param folderText - (optional) 폴더 이름
 * @param title - 제목
 * @param cihps - 역량 chip의 배열
 * @param date - 날짜
 * @param onClick - 클릭하면 이동할 곳
 * @param type - small or large
 * @returns
 */
export const List = ({ folderText, title, chips, date, onClick, type }: ListProps) => {
  return (
    <S.List $type={type} onClick={onClick}>
      <S.Icon $type={type} />
      <S.Content $type={type}>
        {folderText && (
          <S.TextContainer>
            <S.FolderText>{folderText}</S.FolderText>
            <S.Title>{title}</S.Title>
          </S.TextContainer>
        )}
        <S.ChipContainer>
          {chips.map((chip) => (
            <Chip key={chip}>{chip}</Chip>
          ))}
        </S.ChipContainer>
        {type === 'small' && <S.Title>{title}</S.Title>}
        <S.DateText $type={type}>{date}</S.DateText>
      </S.Content>
    </S.List>
  );
};

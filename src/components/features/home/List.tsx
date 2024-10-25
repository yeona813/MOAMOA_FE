import { Chip } from '../../common/chip/Chip';
import * as S from './ListStyle';

interface ListProps {
  folderText: string;
  title: string;
  chips: string[];
  date: string;
}

/**
 *
 * @param folderText - 폴더 이름
 * @param title - 제목
 * @param cihps - 역량 chip의 배열
 * @param date - 날짜
 * @returns
 */
export const List = ({ folderText, title, chips, date }: ListProps) => {
  return (
    <S.List>
      <S.TextContainer>
        <S.FolderText>{folderText}</S.FolderText>
        <S.Title>{title}</S.Title>
      </S.TextContainer>
      <S.ChipContainer>
        {chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </S.ChipContainer>
      <S.DateText>{date}</S.DateText>
    </S.List>
  );
};

import { Chip } from '../../common/chip/Chip';
import * as S from './ListStyle';

interface ListProps {
  folderText: string;
  title: string;
  chips: string[];
  date: string;
  onClick: () => void;
}

/**
 *
 * @param folderText - 폴더 이름
 * @param title - 제목
 * @param cihps - 역량 chip의 배열
 * @param date - 날짜
 * @param onClick - 클릭하면 이동할 곳
 * @returns
 */
export const List = ({ folderText, title, chips, date, onClick }: ListProps) => {
  return (
    <S.List onClick={onClick}>
      <S.Icon />
      <S.Content>
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
      </S.Content>
    </S.List>
  );
};

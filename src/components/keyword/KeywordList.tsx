import { Chip } from '../common/chip/Chip';
import * as S from './KeywordListStyle';

interface KeywordListProps {
  chip: string;
  title: string;
  description: string;
  date: string;
}

export const KeywordList = ({ chip, title, description, date }: KeywordListProps) => {
  return (
    <S.KeywordList>
      <S.Icon src="/icons/ShortCirclesIcon.svg" alt="circle" />
      <S.Content>
        <Chip color={true}>{chip}</Chip>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Date>{date}</S.Date>
      </S.Content>
    </S.KeywordList>
  );
};

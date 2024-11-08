import { BottomSheet } from '../BottomSheet';
import { Textarea } from './Textarea';
import * as S from './ReportBottomSheet.Style';
import CloseIcon from '@icons/CloseIcon.svg';
import { Chip } from '../../chip/Chip';

interface Ability {
  keyword: string;
  content: string;
}

interface RecordData {
  recordTitle: string;
  recordContent: string;
  abilityDtoList: Ability[];
}

interface ReportBottomSheet {
  onClick: () => void;
  onClickStore: () => void;
  data: RecordData;
  onChange: (key: string, value: string) => void;
  onAbilityChange: (index: number, value: string) => void;
}

export const ReportBottomSheet = ({
  onClick,
  onClickStore,
  data,
  onChange,
  onAbilityChange,
}: ReportBottomSheet) => {
  return (
    <BottomSheet onClick={onClick}>
      <S.Header>
        <S.Icon src={CloseIcon} alt="모달 닫기" onClick={onClick} />
        <S.Title>역량 모아보기 편집</S.Title>
        <h6 onClick={onClickStore}>저장</h6>
      </S.Header>
      <S.ContentContainer>
        <Textarea
          isTitle={true}
          value={data.recordTitle}
          onChange={(e) => onChange('recordTitle', e.target.value)}
        />
        <Textarea
          value={data.recordContent}
          onChange={(e) => onChange('recordContent', e.target.value)}
        />
        {data.abilityDtoList.map((item, index) => (
          <S.Keyword key={index}>
            <Chip size="large" color={index % 2 !== 0}>
              {item.keyword}
            </Chip>
            <Textarea
              value={item.content}
              onChange={(e) => onAbilityChange(index, e.target.value)}
            />
          </S.Keyword>
        ))}
      </S.ContentContainer>
    </BottomSheet>
  );
};

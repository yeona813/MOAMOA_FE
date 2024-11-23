import { BottomSheet } from '../../bottomSheet/BottomSheet';
import { Textarea } from './Textarea';
import * as S from './ReportPopUp.Style';
import CloseIcon from '@icons/CloseIcon.svg';
import { Chip } from '../../chip/Chip';
import { AnalysisProps } from '@/types/Analysis';
import { Modal } from '../../modal/Modal';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';

interface ReportPopUpProps {
  onClick: () => void;
  onClickStore: () => void;
  data: AnalysisProps | null;
  onChange: (key: keyof AnalysisProps, value: string) => void;
  onAbilityChange: (index: number, value: string) => void;
}

export const ReportPopUp = ({
  onClick,
  onClickStore,
  data,
  onChange,
  onAbilityChange,
}: ReportPopUpProps) => {
  const isMobile = useMediaQuery('(max-width: 1280px)');
  const [error, setError] = useState(false);

  const handleTitleError = (value: string) => {
    if (value.length > 50) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const Content = (
    <>
      <S.Header>
        <S.Icon src={CloseIcon} alt="모달 닫기" onClick={onClick} />
        <S.Title>AI 역량 분석 편집</S.Title>
        <S.StoreText onClick={onClickStore}>저장</S.StoreText>
      </S.Header>
      <S.ContentContainer>
        <S.Error>
          <Textarea
            isTitle={true}
            value={data?.title || ''}
            onChange={(e) => {
              onChange('title', e.target.value);
              handleTitleError(e.target.value);
            }}
          />
          {error && <S.ErrorMessage>제목은 50자 이하로 입력해주세요.</S.ErrorMessage>}
        </S.Error>
        <Textarea
          value={data?.content || ''}
          onChange={(e) => onChange('content', e.target.value)}
        />
        {data?.abilityMap &&
          Object.keys(data.abilityMap).map((keyword, index) => (
            <S.Keyword key={index}>
              <Chip size="large" color={index % 2 !== 0}>
                {keyword}
              </Chip>
              <Textarea
                value={data.abilityMap?.[keyword] ?? ''}
                onChange={(e) => onAbilityChange(index, e.target.value)}
              />
            </S.Keyword>
          ))}
      </S.ContentContainer>
    </>
  );

  return (
    <>
      {isMobile ? (
        <BottomSheet onClick={onClick}>{Content}</BottomSheet>
      ) : (
        <Modal onClick={onClick} isPC={true}>
          {Content}
        </Modal>
      )}
    </>
  );
};

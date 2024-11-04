import * as S from './GuideButtonStyle';

interface GuideButtonProps {
  text: string;
  onClick: () => void;
}

export const GuideButton = ({ text, onClick }: GuideButtonProps) => {
  return (
    <S.GuideButton onClick={onClick}>
      <S.GuideText>{text}</S.GuideText>
    </S.GuideButton>
  );
};
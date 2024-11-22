import * as S from './LoadingScreen.Style';
import spinnerGif from '@assets/icons/LoadingSpinner.gif';

interface LoadingScreenProps {
  showLabel?: boolean;
}

export const LoadingScreen = ({ showLabel = true }: LoadingScreenProps) => {
  return (
    <S.Container>
      <S.Logo>MOAMOA</S.Logo>
      <S.Spinner>
        <img src={spinnerGif} alt="spinner" />
      </S.Spinner>
      {showLabel && <S.Label>AI가 경험을 분석중이에요</S.Label>}
    </S.Container>
  );
};

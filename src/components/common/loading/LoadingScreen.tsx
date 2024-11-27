import * as S from './LoadingScreen.Style';
import spinnerGif from '@assets/icons/LoadingSpinner.gif';

interface LoadingScreenProps {
  showLabel?: boolean;
  labelText?: string;
}

export const LoadingScreen = ({ showLabel = true, labelText }: LoadingScreenProps) => {
  return (
    <S.Container>
      <S.Logo>MOAMOA</S.Logo>
      <S.Spinner>
        <img src={spinnerGif} alt="spinner" />
      </S.Spinner>
      {showLabel && <S.Label>{labelText}</S.Label>}
    </S.Container>
  );
};

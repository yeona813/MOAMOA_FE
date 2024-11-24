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
      {showLabel && <S.Label>AI 채팅 내용을 요약하고 있어요</S.Label>}
    </S.Container>
  );
};

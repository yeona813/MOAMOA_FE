import { Button } from '../../common/button/Button';
import * as S from './HeaderStyle';

interface HeaderProps {
  onClick: () => void;
}

/**
 *
 * @param onClick - 버튼 클릭 시 수행할 함수
 * @returns
 */
export const Header = ({ onClick }: HeaderProps) => {
  return (
    <S.Header>
      <S.YellowBlur />
      <S.BlueBlur />
      <S.Title>
        CO:RECORD와 함께 <br /> 경험을 기록해보세요
      </S.Title>
      <S.ButtonContainer>
        <Button $styleType="shadow" icon="/icons/RecordIcon.svg" onClick={onClick}>
          기록하러 가기
        </Button>
      </S.ButtonContainer>
    </S.Header>
  );
};

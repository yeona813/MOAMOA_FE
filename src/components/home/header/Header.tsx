import { Button } from '../../common/button/Button';
import * as S from './Header.Style';

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
      <S.Title>
        CO:RECORD와 함께 <br /> 경험을 기록해보세요
      </S.Title>
      <Button styleType="basic" onClick={onClick}>
        기록하러 가기
      </Button>
    </S.Header>
  );
};

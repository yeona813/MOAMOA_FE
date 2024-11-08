import { Header } from '@/components/layout/header/Header';
import { Button } from '../../common/button/Button';
import * as S from './Header.Style';

interface HomeHeaderProps {
  onClick: () => void;
  onClickSideBar: () => void;
}

/**
 *
 * @param onClick - 버튼 클릭 시 수행할 함수
 * @param onClickSideBar - 사이드바 핸들링 함수
 * @returns
 */
export const HomeHeader = ({ onClick, onClickSideBar }: HomeHeaderProps) => {
  return (
    <S.Header>
      <Header onClick={onClickSideBar} />
      <S.Title>
        CO:RECORD와 함께 <br /> 경험을 기록해보세요
      </S.Title>
      <Button styleType="basic" onClick={onClick}>
        기록하러 가기
      </Button>
    </S.Header>
  );
};

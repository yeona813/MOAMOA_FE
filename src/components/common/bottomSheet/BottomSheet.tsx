import { Portal } from '../portal/Portal';
import CloseIcon from '@icons/CloseIcon.svg';
import * as S from './BottomSheet.Style';

interface BottomSheetProps {
  title?: string;
  children: React.ReactNode;
  onClick: () => void;
}

/**
 *
 * @param title - bottomSheet의 제목
 * @param children - bottomSheet 안의 내용물
 * @param onClick - close 버튼 클릭했을 때 수행할 함수
 * @param type - bottomSheet의 길이 (short, long)
 * @returns
 */
export const BottomSheet = ({ title, children, onClick }: BottomSheetProps) => {
  return (
    <Portal>
      <S.Background onClick={onClick}>
        <S.BottomSheet onClick={(e) => e.stopPropagation()}>
          <S.Header $hasTitle={!!title}>
            <S.Title>{title}</S.Title>
            <S.Icon src={CloseIcon} alt="closeIcon" onClick={onClick} />
          </S.Header>
          {children}
        </S.BottomSheet>
      </S.Background>
    </Portal>
  );
};

import { Portal } from '../portal/Portal';
import * as S from './BottomSheetStyle';

interface BottomSheetProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
  type: 'short' | 'long';
}

/**
 *
 * @param title - bottomSheet의 제목
 * @param children - bottomSheet 안의 내용물
 * @param onClick - close 버튼 클릭했을 때 수행할 함수
 * @param type - bottomSheet의 길이 (short, long)
 * @returns
 */
export const BottomSheet = ({ title, children, onClick, type }: BottomSheetProps) => {
  return (
    <Portal>
      <S.Background onClick={onClick}>
        <S.BottomSheet $type={type} onClick={(e) => e.stopPropagation()}>
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.Icon src="/icons/CloseIcon.svg" alt="closeIcon" onClick={onClick} />
          </S.Header>
          {children}
        </S.BottomSheet>
      </S.Background>
    </Portal>
  );
};

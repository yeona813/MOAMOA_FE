import * as S from './ButtonStyle';

export interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  disabled?: boolean;
  $styleType: 'shadow' | 'small' | 'basic' | 'popupRight' | 'popupLeft';
  onClick?: () => void;
}

export const Button = ({ children, icon, disabled, $styleType, onClick }: ButtonProps) => {
  return (
    <S.Container $styleType={$styleType} disabled={disabled} onClick={onClick}>
      {children}
      {icon && <S.Icon src={icon} alt="icon" />}
    </S.Container>
  );
};

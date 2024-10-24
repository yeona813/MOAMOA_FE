import * as S from './ButtonStyle';

export interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  disabled?: boolean;
  buttonStyle: 'shadow' | 'small' | 'basic' | 'popupRight' | 'popupLeft';
  onClick?: () => void;
}

export const Button = ({ children, icon, disabled, buttonStyle, onClick }: ButtonProps) => {
  return (
    <S.Container buttonStyle={buttonStyle} disabled={disabled} onClick={onClick}>
      {children}
      {icon && <S.Icon src={icon} alt="icon" />}
    </S.Container>
  );
};

import * as S from './ButtonStyle';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: string;
  styleType: 'shadow' | 'small' | 'basic' | 'popupRight' | 'popupLeft';
}

export const Button = ({ children, icon, styleType, ...props }: ButtonProps) => {
  return (
    <S.Container $styleType={styleType} {...props}>
      {children}
      {icon && <S.Icon src={icon} alt="icon" />}
    </S.Container>
  );
};

import styled from 'styled-components';
import { theme } from '../../../styles/theme';

interface CommonButtonProps {
  width?: string;
  height?: string;
  padding?: string;
  color: keyof typeof theme.colors;
  $backgroundcolor: keyof typeof theme.colors;
  fontSize: keyof typeof theme.fontSize;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = styled.button<CommonButtonProps>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  padding: ${({ padding }) => padding || '10px 20px'};
  background-color: ${({ theme, $backgroundcolor }) => theme.colors[$backgroundcolor]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  border: none;
  border-radius: 6.1875rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const CommonButton = ({ width, height, padding, color, $backgroundcolor, fontSize, onClick, children }: CommonButtonProps) => {
  return (
    <Button
      width={width}
      height={height}
      padding={padding}
      color={color}
      $backgroundcolor={$backgroundcolor}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

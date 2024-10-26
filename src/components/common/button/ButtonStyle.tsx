import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const popupCommonStyles = css`
  width: 7.75rem;
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.75rem;
`;

const BUTTON_STYLES = {
  small: css`
    padding: 0.4375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    border-radius: 6.1875rem;
  `,
  shadow: css`
    padding: 0.625rem 0.75rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 6.1875rem;
  `,
  basic: css`
    width: 100%;
    height: 3rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.75rem;
  `,
  popupRight: css`
    ${popupCommonStyles};
  `,
  popupLeft: css`
    ${popupCommonStyles};
    background-color: ${(props) => props.theme.colors.gray50};
    color: ${(props) => props.theme.colors.gray800};
  `,
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.gray100 : props.theme.colors.blue400};
  box-shadow: ${(props) =>
    props.$styleType !== 'shadow' ? 'none' : '0px 0px 8px 0px rgba(251, 247, 195, 0.6) inset'};
  border: none;
  color: #fefef3;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  ${(props) => BUTTON_STYLES[props.$styleType]};
`;

export const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

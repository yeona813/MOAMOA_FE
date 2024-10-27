import styled, { css } from 'styled-components';

export const Memo = styled.section`
  position: relative;
  display: flex;
  gap: 0.5625rem;
  width: 100%;
  height: 11.625rem;
  padding: 0.8125rem 0.6875rem 1.25rem 0.4375rem;
  background-color: ${({ theme }) => theme.colors.yellow100};
  border-radius: 0.125rem;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.04);
`;

export const Icon = styled.div`
  width: 0.4375rem;
  height: 100%;
  background-image: url('/icons/WhiteCirclesIcon.svg');
  background-repeat: repeat-y;
`;

export const TextFiled = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  background-color: ${({ theme }) => theme.colors.yellow100};
  outline: none;
  color: ${({ theme }) => theme.colors.gray900};

  &::placeholder {
    font-size: 0.875rem;
    line-height: 145%;
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

const blurMixin = css`
  position: absolute;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.yellow400};
  filter: blur(4.6875rem);
`;

export const YellowBigBlur = styled.div`
  ${blurMixin};
  bottom: 0.375rem;
  right: -0.6875rem;
  width: 6.25rem;
  height: 6.25rem;
  opacity: 0.6;
`;

export const YellowSmallBlur = styled.div`
  ${blurMixin};
  top: 0.8125rem;
  left: -1rem;
  width: 3.75rem;
  height: 3.75rem;
`;

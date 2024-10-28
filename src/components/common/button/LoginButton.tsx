import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19.875rem; // 318px
  height: 3.3125rem; // 53px
  position: absolute;
  top: 31.59375rem; // 505.5px
  left: 1.301875rem; // 20.83px
  padding: 0.98125rem 1.226875rem; // 15.7px 19.63px
  gap: 0.613125rem; // 9.81px
  border-radius: 0.73625rem 0 0 0; // 11.78px 0px 0px 0px
  background-color: rgba(255, 230, 0, 1); // UIColor(red: 1, green: 0.9, blue: 0, alpha: 1)
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  font-family: ${theme.fonts.regular};
  font-size: ${theme.fontSize.h6};
  font-weight: 600;
  color: ${theme.colors.gray900};

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

const KakaoIcon = styled.img`
  width: 1.125rem; // 18px
  height: 1.125rem; // 18px
  margin-right: 0.5rem; // 8px
`;

interface LoginButtonProps {
  onClick: () => void;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <KakaoIcon src="/icons/kakao-icon.svg" alt="Kakao Icon" />
      카카오로 로그인하기
    </StyledButton>
  );
};

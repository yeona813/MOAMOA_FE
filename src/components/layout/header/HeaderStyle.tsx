import styled, { css } from 'styled-components';

const commonStyles = css`
  display: flex;
  width: 100%;
  height: 6.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

export const YesTabBar = css`
  padding-top: 2.8125rem;
`;

export const NoTabBar = css`
  padding-top: 3.875rem;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
`;

export const Header = styled.header<{ $isTabBar: boolean }>`
  ${commonStyles};
  ${({ $isTabBar }) => ($isTabBar ? YesTabBar : NoTabBar)};
`;

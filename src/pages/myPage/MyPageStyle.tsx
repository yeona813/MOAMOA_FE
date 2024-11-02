import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 100%;
  height: 3.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
`;

export const Content = styled.div`
  position: absolute;
  top: 3.375rem;
  left: 0;
  width: 100%;
`;

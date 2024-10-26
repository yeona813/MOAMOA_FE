import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 6.375rem;
  justify-content: center;
  padding-top: 3.875rem;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 1rem;
  font-weight: 600;
  line-height: 140%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

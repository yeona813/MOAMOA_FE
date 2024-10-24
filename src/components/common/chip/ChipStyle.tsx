import styled from 'styled-components';

export const Chip = styled.div<{ color?: boolean }>`
  display: inline-flex;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  background-color: ${(props) => (props.color ? '#fffde3' : props.theme.colors.blue50)};
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 0.625rem;
`;

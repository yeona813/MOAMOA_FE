import styled from 'styled-components';

export const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 0.875rem;
`;

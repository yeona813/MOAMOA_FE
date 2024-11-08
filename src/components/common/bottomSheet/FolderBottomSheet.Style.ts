import styled from 'styled-components';

export const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray900};
  font-size: 0.875rem;
  line-height: 145%;
`;

import styled from 'styled-components';

export const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 1.875rem;
`;

export const SheetItem = styled.div<{ $isDelete?: boolean }>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${({ $isDelete }) => ($isDelete ? '#f00' : '#1d1d1d')};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 150%;
`;

export const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

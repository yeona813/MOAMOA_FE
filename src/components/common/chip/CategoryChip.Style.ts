import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const CategoryChip = styled.button<{ $isSelected: boolean }>`
  display: inline-flex;
  padding: 0.5rem 0.75rem;
  border-radius: 6.1875rem;
  border: ${({ $isSelected }) =>
    $isSelected ? `1px solid ${Colors.gray700}` : `1px solid ${Colors.gray50}`};
  background-color: ${({ $isSelected }) => ($isSelected ? Colors.gray700 : Colors.white)};
  color: ${({ $isSelected }) => ($isSelected ? Colors.white : Colors.gray500)};
  font-size: 0.9375rem;
  line-height: 145%;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: ${Colors.white};
    background-color: ${Colors.gray700};
    border: 1px solid ${Colors.gray700};
  }
`;

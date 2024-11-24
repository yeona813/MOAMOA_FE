import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Skill = styled.div<{ $color?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem 0.75rem;
  background-color: ${({ $color }) => ($color ? Colors.yellow50 : Colors.blue50)};
  border-radius: 0.5rem;
  color: ${Colors.gray900};

  ${(props) => props.theme.breakpoints.min} {
    flex-direction: row;
    padding: 1.75rem 2.375rem;
    gap: 2.25rem;
    height: 100%;
  }
`;

export const Keyword = styled.h6`
  line-height: 145%;
  white-space: nowrap;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.125rem;
    line-height: 140%;
  }
`;

export const Line = styled.div<{ $color?: boolean }>`
  width: 90%;
  height: 1px;
  background-color: ${({ $color }) => ($color ? Colors.yellow300 : Colors.blue100)};

  ${(props) => props.theme.breakpoints.min} {
    width: 1px;
    height: 3.25rem;
  }
`;

export const Description = styled.h6`
  font-weight: 400;
  line-height: 145%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.125rem;
  }
`;

import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 0rem 1.25rem;
  gap: 1rem;
  width: 100%;
  background-color: ${Colors.white};
  border-bottom: 1px solid ${Colors.gray50};

  ${(props) => props.theme.breakpoints.min} {
    background-color: ${Colors.gray25};
    padding: 3.25rem 4.75rem 0rem;
  }
`;

export const Content = styled.div`
  padding: 0rem 0.25rem;
  color: ${Colors.gray900};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 135%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.75rem;
    line-height: 140%;
  }
`;

export const TabBar = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 100%;
`;

export const Item = styled.div<{ $isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  color: ${({ $isSelected }) => ($isSelected ? Colors.gray700 : '#767676')};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
  padding: 0.5rem 0rem;
  border-bottom: ${({ $isSelected }) => ($isSelected ? `2px solid ${Colors.gray700}` : 'none')};

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.25rem;
    line-height: 135%;
  }
`;

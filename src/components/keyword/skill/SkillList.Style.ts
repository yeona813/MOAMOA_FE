import { Colors } from '@/styles/colors';
import styled from 'styled-components';

interface ListItemProps {
  $percent: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  padding: 0.75rem 1rem;
  margin: 0rem 3rem 0 3rem;

  ${(props) => props.theme.breakpoints.min} {
    flex-direction: row;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.0625rem;
  background-color: ${Colors.gray50};
  margin-bottom: 2rem;

  ${(props) => props.theme.breakpoints.min} {
    display: none;
  }
`;

export const ListItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ListItem = styled.div<ListItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 16.5rem;
  height: 3rem;
  border-radius: 0.75rem;
  padding: 0.8125rem 1rem;
  cursor: pointer;
  background-color: ${({ $percent }) => {
    if ($percent > 33) return Colors.blue200;
    if ($percent > 25) return Colors.blue100;
    if ($percent > 20) return Colors.yellow200;
    if ($percent > 10) return Colors.yellow50;
    else return Colors.gray25;
  }};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.h6`
  color: ${Colors.gray900};
  line-height: 1.4rem;
`;

export const Percent = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${Colors.gray700};
  line-height: 1.45rem;
`;

export const Count = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${Colors.gray600};
  line-height: 1.45rem;
  margin: 0;
`;

export const CountCircle = styled.div<ListItemProps>`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 0.125rem 0.375rem;
  background-color: ${({ $percent }) => {
    if ($percent > 40) return Colors.blue100;
    if ($percent > 29) return Colors.blue50;
    else return Colors.white;
  }};
`;

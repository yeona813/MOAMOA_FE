import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  ${(props) => props.theme.breakpoints.min} {
    flex-direction: row;
    background-color: ${Colors.gray25};
    padding-top: 1.5rem;
  }
`;

export const Content = styled.div`
  ${props => props.theme.breakpoints.min} {
    display: flex;
    flex-direction: row;
    width: 900px;
    height: 100%;
    background-color: ${Colors.white};
    align-items: center;
    border-radius: 20px;
    padding: 1rem 1rem 3rem 1rem;
  }
  bottom: 10rem;
`;
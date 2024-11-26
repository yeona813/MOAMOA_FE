import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 5rem 15rem 0rem 4.75rem;
  }
`;

export const MobileHeader = styled.div`
  background-color: ${Colors.white};
  width: 100%;
  padding: 0rem 1.25rem;
  height: 3.75rem;
  border-bottom: 1px solid ${Colors.gray100};

  ${(props) => props.theme.breakpoints.min} {
    display: none;
  }
`;

export const PcHeader = styled.h2`
  display: none;
  ${(props) => props.theme.breakpoints.max} {
    display: none;
    line-height: 140%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 3.75rem);
  background-color: #f5f5f5;
  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    flex-direction: column;
    background-color: ${Colors.white};
    height: auto;
    gap: 5rem;
  }
`;

import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const MobileHeader = styled.header`
  ${(props) => props.theme.breakpoints.min} {
    display: none;
  }
`;

export const PcHeader = styled.header`
  display: none;
  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 4.75rem 0rem;
    color: ${Colors.gray900};
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 140%;
  }
`;

export const IconContainer = styled.div`
  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    gap: 0.75rem;
  }
`;

export const Icon = styled.img`
  ${(props) => props.theme.breakpoints.min} {
    width: 1.875rem;
    height: 1.875rem;
  }
`;

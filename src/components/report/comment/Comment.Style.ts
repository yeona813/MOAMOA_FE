import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  ${(props) => props.theme.breakpoints.min} {
    gap: 1.5rem;
  }
`;

export const Title = styled.h6`
  line-height: 140%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 135%;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.3125rem;

  ${(props) => props.theme.breakpoints.min} {
    gap: 1.625rem;
  }
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;

  ${(props) => props.theme.breakpoints.min} {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0rem 1.25rem 1.25rem;
  border: 1px solid ${Colors.gray50};
  font-size: 1rem;
  line-height: 145%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.125rem;
  }
`;

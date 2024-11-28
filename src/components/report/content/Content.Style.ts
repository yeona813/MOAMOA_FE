import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 1.25rem;
  color: ${Colors.gray900};
  gap: 2.75rem;
  margin-top: 3.375rem;

  ${(props) => props.theme.breakpoints.min} {
    margin-top: 4rem;
    padding: 0rem 4.75rem 1.875rem;
    gap: 4rem;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`;

export const Title = styled.h4`
  line-height: 135%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.375rem;
  }
`;

export const Description = styled.h6`
  color: ${Colors.gray900};
  font-weight: 400;
  line-height: 145%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.125rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.gray50};

  ${(props) => props.theme.breakpoints.min} {
    display: none;
  }
`;

export const MiddleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;

  ${(props) => props.theme.breakpoints.min} {
    gap: 2.25rem;
  }
`;

export const MiddleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatText = styled.h6`
  color: ${Colors.gray500};
  font-weight: 400;
  line-height: 145%;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.125rem;
  }
`;

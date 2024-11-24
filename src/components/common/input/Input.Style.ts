import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
`;

export const Input = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 0.75rem 0.5rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${({ $isError }) => ($isError ? Colors.red : Colors.gray50)};
  color: ${Colors.gray900};
  font-size: 1rem;
  line-height: 145%;

  &::placeholder {
    color: ${Colors.gray300};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ $isError }) => ($isError ? Colors.red : Colors.gray50)};
  }

  ${(props) => props.theme.breakpoints.min} {
    max-width: 30.625rem;
    padding: 0.75rem;
    font-size: 1.125rem;
  }
`;

export const ErrorMessage = styled.p`
  color: ${Colors.red};
  font-size: 0.75rem;
  line-height: 130%;
`;

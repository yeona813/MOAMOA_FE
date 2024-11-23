import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const TextFiled = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  background-color: ${Colors.yellow100};
  outline: none;
  color: ${Colors.gray900};

  &::placeholder {
    font-size: 0.875rem;
    line-height: 145%;
    color: ${Colors.gray400};
  }
`;

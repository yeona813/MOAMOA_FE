import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

export const Modal = styled.div<{ $isPC?: boolean }>`
  position: relative;
  width: ${({ $isPC }) => ($isPC ? '31.25rem' : '17.5rem')};
  padding: ${({ $isPC }) => ($isPC ? '1.5rem' : '2.625rem 0.75rem 0.875rem')};
  border-radius: 0.75rem;
  background-color: ${Colors.white};
`;

export const Icon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
`;

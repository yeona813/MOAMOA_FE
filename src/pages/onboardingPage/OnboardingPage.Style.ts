import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Cotainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 3.75rem;
  gap: 1.25rem;
  ${(props) => props.theme.breakpoints.min} {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1.25rem;
  right: 1.0625rem;
`;

export const Chips = styled.div`
  width: fit-content;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  background-color: ${Colors.yellow200};
  color: ${Colors.gray900};
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 145%;
`;

export const Image = styled.img`
  width: 20.3125rem;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Text = styled.h4`
  line-height: 135%;
  color: ${Colors.gray600};
`;

export const Highlight = styled.h4`
  line-height: 135%;
  color: ${Colors.blue400};
`;

export const AfterText = styled.div`
  display: flex;
`;

export const Circles = styled.div`
  display: flex;
  gap: 0.3125rem;
  align-items: center;
`;

export const Circle = styled.div<{ $isSelected: boolean }>`
  width: ${({ $isSelected }) => ($isSelected ? '0.625rem' : '0.5rem')};
  height: ${({ $isSelected }) => ($isSelected ? '0.625rem' : '0.5rem')};
  border-radius: 100%;
  background-color: ${({ $isSelected }) => ($isSelected ? '#007aff' : '#d9d9d9')};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20.3125rem;
`;

import { Colors } from '@/styles/colors';
import styled from 'styled-components';

export const Cotainer = styled.div`
  ${(props) => props.theme.breakpoints.min} {
    display: flex;
    flex-direction: column;
    padding: 5rem 4.75rem;
    gap: 3.75rem;
  }
`;

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
    width: 100%;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 140%;
  }
`;

export const Edit = styled.h5`
  ${(props) => props.theme.breakpoints.min} {
    line-height: 145%;
    color: ${Colors.gray500};
    cursor: pointer;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 3.375rem;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 3.375rem);
  padding: 1.5rem 1.75rem;
  gap: 0.625rem;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) => props.theme.breakpoints.min} {
    position: static;
    padding: 0;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.625rem 1.25rem;
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const Input = styled.input`
  width: 90%;
  height: 3rem;
  border: none;
  outline: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${Colors.gray800};
  background-color: ${Colors.blue50};
`;

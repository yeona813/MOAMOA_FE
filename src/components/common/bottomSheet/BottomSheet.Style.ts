import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const BottomSheet = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: fit-content;
  padding: 1.25rem;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100;
`;

export const Header = styled.header<{ $hasTitle: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ $hasTitle }) => ($hasTitle ? 'space-between' : 'flex-end')};
`;

export const Title = styled.h5`
  color: ${({ theme }) => theme.colors.gray900};
`;

export const Icon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

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

export const BottomSheet = styled.div<{ $type: string }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: ${(props) => (props.$type === 'short' ? '13.5rem' : '21.375rem')};
  padding: 1.25rem;
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 100px;
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
`;

export const Icon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

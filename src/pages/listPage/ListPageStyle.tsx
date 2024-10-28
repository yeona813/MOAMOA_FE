import styled from 'styled-components';

export const ListPage = styled.div`
  background-color: ${({ theme }) => theme.colors.gray25};
`;

export const Button = styled.button`
  position: absolute;
  bottom: 6.875rem;
  right: 1.5625rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue400};
  box-shadow: 0px 0px 8px 0px rgba(251, 247, 195, 0.6) inset;
  border-radius: 6.1875rem;
  border: none;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

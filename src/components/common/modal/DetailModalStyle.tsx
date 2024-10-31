import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  color: ${({ theme }) => theme.colors.gray700};
`;

export const Text = styled.span`
  width: 12rem;
  word-break: keep-all;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
`;

export const Description = styled.p`
  font-size: 0.6875rem;
  font-weight: 400;
  height: 145%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
`;

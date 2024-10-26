import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const Text = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.gray700};
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

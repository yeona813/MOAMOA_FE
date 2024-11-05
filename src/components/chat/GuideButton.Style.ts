import styled from 'styled-components';

export const GuideButton = styled.button`
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  max-width: 18.75rem;
  margin-bottom: 0.625rem;
  margin-left: 0.625rem;
`;

export const GuideText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray900};
  font-weight: 400;
  margin: 0;
  line-height: 1.25rem;
`;
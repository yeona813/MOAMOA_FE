import styled from 'styled-components';

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5625rem;
  width: 100%;
  padding: 0.6875rem 0.875rem 1.125rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.blue50};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.blue300};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 145%;
`;

export const Content = styled.div`
  display: flex;
  gap: 0.4375rem;
  align-items: flex-start;
  font-size: 0.875rem;
  line-height: 145%;
`;

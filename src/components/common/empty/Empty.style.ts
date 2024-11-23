import styled from 'styled-components';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6.5625rem;
  gap: 1.25rem;
  color: ${({ theme }) => theme.colors.gray900};
  text-align: center;
  line-height: 145%;
`;

export const Empty = styled.img`
  width: 8.3125rem;
  height: 8.3125rem;
  margin-bottom: 0.5rem;
`;

export const EmptyMessage = styled.span`
  font-size: 1rem;
  font-weight: 700;
`;

export const Description = styled.h6`
  font-weight: 400;
`;

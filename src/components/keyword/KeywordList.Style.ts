import styled from 'styled-components';

export const KeywordList = styled.div`
  width: 100%;
  padding: 0.875rem 1.125rem 0.875rem 0.5rem;
  display: flex;
  gap: 0.625rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray900};
`;

export const Icon = styled.img`
  width: 0.375rem;
  height: 6.5625rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 145%;
`;

export const Description = styled.p`
  font-size: 0.5625rem;
  line-height: 145%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const Date = styled.p`
  font-size: 0.5625rem;
  line-height: 145%;
`;

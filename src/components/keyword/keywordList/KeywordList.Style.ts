import styled from 'styled-components';

export const KeywordList = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray900};
  border-radius: 0.5rem;
  ${(props) => props.theme.breakpoints.min} {
    max-width: 23.0625rem;
  }
`;

export const Title = styled.h6`
  line-height: 145%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.125rem;
  }
`;

export const Description = styled.p`
  font-size: 0.8125rem;
  line-height: 145%;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 0.875rem;
  }
`;

export const Date = styled.p`
  font-size: 0.6875rem;
  line-height: 145%;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 0.875rem;
  }
`;

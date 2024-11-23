import styled from 'styled-components';

export const SheetItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.375rem 1.125rem 1rem 1rem;
  gap: 2.8125rem;
  color: ${({ theme }) => theme.colors.gray900};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${(props) => props.theme.breakpoints.min} {
    gap: 0rem;
    padding-top: 0rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Icon = styled.img`
  width: 5.625rem;
  height: 5.625rem;

  ${(props) => props.theme.breakpoints.min} {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 145%;
  width: 6.5625rem;
`;

export const Title = styled.h3`
  line-height: 135%;
`;

import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14.5rem;
  padding: 0 1.25rem 1.25rem;
  color: ${({ theme }) => theme.colors.gray900};

  @media screen and (min-width: 1280px) {
    height: 100%;
    padding: 0rem;
  }
`;

export const Title = styled.h3`
  margin-top: 3.75rem;
  line-height: 135%;

  @media screen and (min-width: 1280px) {
    margin-top: 0rem;
    font-size: 1.625rem;
  }
`;

export const SheetContainer = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 1.25rem;
    margin-top: 1.25rem;
  }
`;

import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 14.5rem);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 1.25rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray25};
  border-radius: 1.25rem 1.25rem 0rem 0rem;
  color: ${({ theme }) => theme.colors.gray900};

  @media screen and (min-width: 1280px) {
    padding: 0rem;
    border-radius: 0rem;
    gap: 0.75rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.h5`
  line-height: 140%;

  @media screen and (min-width: 1280px) {
    font-size: 1.25rem;
  }
`;

export const Plus = styled.p`
  font-size: 0.75rem;
  line-height: 145%;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    font-size: 1.125rem;
  }
`;

export const ListContainer = styled.div<{ $isEmpty: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
  overflow-y: auto;
  flex-grow: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 1280px) {
    ${(props) =>
      !props.$isEmpty &&
      `
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    `}
  }
`;

import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 11.125rem;
  padding: 0rem 0rem 1.25rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;

  ${(props) => props.theme.breakpoints.min} {
    background-color: ${({ theme }) => theme.colors.gray25};
    border: none;
    padding: 0rem 4.75rem;
    height: auto;
    gap: 0;
  }
`;

export const Title = styled.h4`
  line-height: 135%;
  color: ${({ theme }) => theme.colors.gray900};

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.75rem;
    margin-bottom: 1.75rem;
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  gap: 0.625rem;

  ${(props) => props.theme.breakpoints.min} {
    gap: 0.75rem;
  }
`;

export const FolderIcon = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.1875rem;
  border: 1px solid ${({ theme }) => theme.colors.gray50};
  cursor: pointer;
  flex-shrink: 0;

  ${(props) => props.theme.breakpoints.min} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const Icon = styled.img`
  width: 0.9375rem;
  height: 0.9375rem;

  ${(props) => props.theme.breakpoints.min} {
    width: 1.125rem;
    height: 1.125rem;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) => props.theme.breakpoints.min} {
    gap: 0.75rem;
  }
`;

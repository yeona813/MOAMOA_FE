import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1100;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  width: 80%;
  height: 100vh;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};

  ${(props) => props.theme.breakpoints.min} {
    width: 14.875rem;
    padding: 1.25rem 3.125rem 0rem 2.5rem;
    gap: 2.5rem;
    border-radius: 0rem 1.25rem 1.25rem 0rem;
    border: 1px solid ${({ theme }) => theme.colors.gray50};
  }
`;

export const Title = styled.span`
  font-family: 'MontserratAlternates';
  font-size: 1.3125rem;
  font-weight: 800;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.625rem;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;

  ${(props) => props.theme.breakpoints.min} {
    gap: 1.75rem;
  }
`;

export const Item = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    fill: ${(props) => (props.$isActive ? props.theme.colors.gray700 : props.theme.colors.gray300)};
    stroke: ${(props) =>
      props.$isActive ? props.theme.colors.gray700 : props.theme.colors.gray300};
    transition:
      fill 0.3s ease,
      stroke 0.3s ease;
  }

  span {
    color: ${(props) =>
      props.$isActive ? props.theme.colors.gray700 : props.theme.colors.gray300};
    transition: color 0.3s ease;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.gray900};
    stroke: ${({ theme }) => theme.colors.gray900};
  }

  &:hover span {
    color: ${({ theme }) => theme.colors.gray900};
  }

  ${(props) => props.theme.breakpoints.min} {
    gap: 0.625rem;
  }
`;

export const Icon = styled.div`
  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  ${(props) => props.theme.breakpoints.min} {
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const Text = styled.span<{ $isActive: boolean }>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => (props.$isActive ? props.theme.colors.gray700 : props.theme.colors.gray300)};

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1.125rem;
  }
`;

import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Text = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #070707;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.min} {
    font-size: 1rem;
    font-weight: 600;
    line-height: 145%;
  }
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 6.375rem);
  padding: 1.5rem 1.75rem 6.625rem;
  gap: 10px;
`;

export const ListContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

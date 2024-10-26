import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 6.375rem;
  padding-top: 2.8125rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 43.625rem;
  padding: 1.75rem 1.25rem 2.5rem 1.25rem;
`;

export const ButtonStyle = styled.div`
  width: calc(100% - 2.5rem);
  position: absolute;
  bottom: 2.5rem;
  left: 1.25rem;
`;

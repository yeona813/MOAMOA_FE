import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
`;

export const SideBar = styled.div`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

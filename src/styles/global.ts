import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    src: url(/fonts/Pretendard-Regular.ttf) format('ttf');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    src: url(/fonts/Pretendard-SemiBold.ttf) format('ttf');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    src: url(/fonts/Pretendard-Bold.ttf) format('ttf');
  }
  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    src: url(/fonts/MontserratAlternates-Bold.ttf) format('ttf');
  }

  h1 {
    font-size: ${theme.fontSize.h1};
    font-weight: 700;
  }

  h2 {
    font-size: ${theme.fontSize.h2};
    font-weight: 600;
  }

  h3 {
    font-size: ${theme.fontSize.h3};
    font-weight: 600;
  }

  h4 {
    font-size: ${theme.fontSize.h4};
    font-weight: 700;
  }

  h5 {
    font-size: ${theme.fontSize.h5};
    font-weight: 600;
  }

  h6 {
    font-size: ${theme.fontSize.h6};
    font-weight: 600;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: ${theme.fonts.regular};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

    background: ${(props) => props.theme.colors.background}
  }

  html, body {
    font: 16px 'Raleway', sans-serif;

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font: 16px 'Raleway', sans-serif;

    background: transparent;
    border: none;
  }

  a,
  button {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  li {
    list-style-type: none;
  }
`;

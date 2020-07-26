import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.primary.text};
  }

  html {
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.secondary.background};
  }

  html, body {
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Raleway', sans-serif;
  }

  button {
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

  #gatsby-focus-wrapper section:nth-child(even) {
    background: ${({ theme }) => theme.colors.primary.background};
  }
`;

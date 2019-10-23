import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body, input, button {
    font: 16px Raleway, sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    user-select: none;
    border: 0;
  }
`;

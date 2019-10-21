import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    text-decoration: none;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
  }

  button {
    border: 0;
  }
`;

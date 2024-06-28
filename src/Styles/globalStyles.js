// src/Styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';
import background from '../Assets/background.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    height: 100vh;
    overflow: hidden;
  }

  #root::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    filter: blur(5px);
    z-index: -1;
  }

  #root > * {
    position: relative;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;


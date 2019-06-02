import { createGlobalStyle } from "styled-components";

export { GlobalStyles };

const GlobalStyles = createGlobalStyle`
html {
  height: 100%;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  background: #61dafb;
}

*, *::after, *::before {
  box-sizing: border-box;
}

#root {
  height: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
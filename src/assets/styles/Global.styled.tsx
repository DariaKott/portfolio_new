import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
  margin: 0;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${theme.colors.bg};
  background-repeat: no-repeat;
  background-position: top right;
}

section {

    & + section {
        padding-top: 50px;
    }

}

button {
    transition: ${theme.animations.transition};

    &:hover {
        cursor: pointer;
    }
}
`;


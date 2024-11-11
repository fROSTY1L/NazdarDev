import { createGlobalStyle } from "styled-components";
import { Colors } from "../variables/Colors";

export const GlobalStyle = createGlobalStyle<{colors: Colors}>`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    scroll-behavior: smooth;
}

body{
    background: ${({ colors }) => colors.bg};
}

.vk:hover {
      background-color: ${({ colors }) => colors.buttons.vk};
  }
.telegram:hover {
      background-color: ${({ colors }) => colors.buttons.telegram};
  }
.discord:hover {
      background-color: ${({ colors }) => colors.buttons.discord};
  }
.github:hover {
      background-color: ${({ colors }) => colors.buttons.github};
  }

.non-selectable {
    user-select: none; 
    -webkit-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none;
}
`

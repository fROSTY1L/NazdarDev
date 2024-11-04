import { createGlobalStyle } from "styled-components";
import { colors } from "../variables/Colors";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", serif;
    scroll-behavior: smooth;
}

body{
    background: ${colors.bg};
}

.vk:hover {
      background-color: ${colors.buttons.vk};
  }
.telegram:hover {
      background-color: ${colors.buttons.telegram};
  }
.discord:hover {
      background-color: ${colors.buttons.discord};
  }
.github:hover {
      background-color: ${colors.buttons.github};
  }
`

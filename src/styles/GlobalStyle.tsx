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

.vk${({colors}) => colors.theme == 'dark' ? `:hover` : ``} {
      background-color: ${({ colors }) => colors.buttons.vk};
  }
.telegram${({colors}) => colors.theme == 'dark' ? `:hover` : ``} {
      background-color: ${({ colors }) => colors.buttons.telegram};
  }
.discord${({colors}) => colors.theme == 'dark' ? `:hover` : ``} {
      background-color: ${({ colors }) => colors.buttons.discord};
  }
.github${({colors}) => colors.theme == 'dark' ? `:hover` : ``} {
      background-color: ${({ colors }) => colors.buttons.github};
  }

.non-selectable {
    user-select: none; 
    -webkit-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none;
}
`

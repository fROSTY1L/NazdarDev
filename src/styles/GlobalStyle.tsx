import { createGlobalStyle } from "styled-components";
import { Colors } from "../variables/Colors";

export const GlobalStyle = createGlobalStyle<{colors: Colors}>`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Syne", sans-serif;
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

}
`


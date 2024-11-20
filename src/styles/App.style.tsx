import styled from "styled-components";
import { Colors } from "../variables/Colors";

const Content = styled.div<{colors: Colors}>`
  position: relative;
  @media(min-width: 1300px) {
    padding-left: 18rem;
  }
  z-index: 1;
`

const LeftMenu = styled.div`
  position: fixed;
  z-index: 5;
`

const GlobalWrap = styled.div`
  width: 98vw;
`

export { Content, GlobalWrap , LeftMenu }
import styled from "styled-components";
import { Colors } from "../variables/Colors";

const Content = styled.div<{colors: Colors}>`
  position: relative;
  padding-left: 18rem;
  z-index: 1;
`

const LeftMenu = styled.div`
  position: fixed;
  z-index: 5;
`

const GlobalWrap = styled.div`
  width: 99vw;
    
`

export { Content, GlobalWrap , LeftMenu}
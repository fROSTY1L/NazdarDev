import styled from "styled-components";
import { Colors } from "../variables/Colors";

const Content = styled.div<{colors: Colors}>`
  position: relative;
  
  height: 100%;
  display: flex;
  flex-direction: column;
  @media(min-width: 1300px) {
    padding-left: 18rem;
  }
  @media(max-width: 475px) {
    margin-top: 5rem;
    width: 100vw;
  }
  z-index: 0;
`

const LeftMenu = styled.div`
  position: fixed;
  z-index: 5;
`

const GlobalWrap = styled.div<{isBlur: boolean}>`
  ${({isBlur}) => isBlur ? `filter: blur(5px);` : ``}
  width: 100%;
  display: grid;
`

export { Content, GlobalWrap , LeftMenu }
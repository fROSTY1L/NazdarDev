import styled from "styled-components";
import { Colors } from "../variables/Colors";

const Content = styled.div<{colors: Colors, isOpen: boolean}>`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  @media(min-width: 1300px) {
    padding-left: 4rem;
    ${({isOpen}) => isOpen && `padding-left: 18rem;`}
  }
  @media(max-width: 475px) {
    margin-top: 5rem;
    width: 100vw;
  }
  z-index: 30;
  
`

const GlobalWrap = styled.div<{isBlur: boolean}>`
  ${({isBlur}) => isBlur ? `filter: blur(5px);` : ``}
  width: 98vw;
  display: grid;
  @media(max-width: 475px) {
    margin-top: 5rem;
    width: 99vw;
  }
`

export { Content, GlobalWrap}
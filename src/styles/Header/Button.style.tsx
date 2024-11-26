import styled from "styled-components";
import { Colors } from "../../variables/Colors";
import { nonSelectable } from "../NonSelectable";

export const ButtonWrap = styled.div<{colors: Colors, isActive: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  z-index: 10;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  ${nonSelectable}
  transition: transform 0.3s ease, background-color 0.3s ease; 
    &:hover {
        transform: scale(1.05); 
    }
    &:active {
        transform: scale(0.98);  
    } 
  background-color: ${({ isActive }) => (isActive ? ({ colors }) => colors.menu : 'transparent')};
  color: ${({ isActive }) => (isActive ? ({ colors }) => colors.text.main : ({ colors }) => colors.text.gray)};
  border: none;
  
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  @media(max-width: 475px) {
        height: 1rem;
        padding: .5rem;
        font-size: .8rem;
    }
`
import styled from "styled-components";
import { Colors } from "../../variables/Colors";

export const ButtonWrap = styled.div<{colors: Colors}>`
  background: ${({ colors }) => colors.menu};
  color: ${({ colors }) => colors.text.main};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease; 
    &:hover {
        transform: scale(1.05); 
    }
    &:active {
        transform: scale(0.98);  
    }

`
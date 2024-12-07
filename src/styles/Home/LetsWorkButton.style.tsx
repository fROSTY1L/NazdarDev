import styled from "styled-components";
import { nonSelectable } from "../NonSelectable";

export const gradientAnimation = `
background: linear-gradient(45deg, 
        #5221E6,
        #71bdd9, 
        #0072F7
        
    );
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
  } 
`

export const MainButton = styled.div`
  text-align: center;
  border-radius: .5rem;
  padding: 1rem;
  width: 100%;
  cursor: pointer;
  ${gradientAnimation}
  transition: transform 0.3s ease, background-color 0.3s ease; 
    &:hover {
        transform: scale(1.05); 
    }
    &:active {
        transform: scale(0.98);  
    }
  color: #ffffff;
  ${nonSelectable}
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  
`


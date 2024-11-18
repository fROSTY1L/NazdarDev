import styled, { keyframes } from "styled-components";
import { Colors } from "../../variables/Colors";
import { nonSelectable } from "../NonSelectable";

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 200px; 
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 200px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
  ${nonSelectable}
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: .3rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #0056b3;
  }

`;

const MenuList = styled.ul<{ isOpen: boolean, colors: Colors }>`
  position: absolute;
  top: 110%;
  right: 0;
  font-size: .8rem;
  background-color: ${({colors}) => colors.menu};
  color: ${({colors}) => colors.text.main};
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow: hidden;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.3s ease forwards;
`;

const MenuItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  width: 15rem;
  &:hover {
    background-color: ;
  }
`;

const Icon = styled.img<{rotation: number}>`
    height: 80%;
    transition: transform 0.3s ease;
    transform: rotate(${({rotation}) => `${rotation}`}deg);
    
`


export { MenuContainer, MenuItem, MenuList, Button, Icon }
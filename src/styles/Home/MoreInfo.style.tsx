import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const RoundText = styled.img`
  width: 10rem; 
  height: 10rem; 
  border-radius: 50%; 
  animation: ${rotate} 10s linear infinite; 
  object-fit: cover; 
`;

const Icon = styled.img`
  position: absolute; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4rem; 
  height: 4rem;
  z-index: 1; 
`;

export { Container, RoundText, Icon };

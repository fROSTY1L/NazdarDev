import styled, { keyframes } from "styled-components";
import { Colors } from "../variables/Colors";


const Wrap = styled.div<{colors: Colors}>`
  border-radius: .5rem;
  background: ${({ colors }) => colors.menu};
  height: calc(100vh - .6rem);
  width: 18rem;
  margin: .3rem;
  padding: 1rem;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  @media (max-width: 768px) {
      display: none;
    }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  color: white;
`

const InfoPart = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  width: 100%;
  gap: 1.2rem;
`
export const gradientAnimation = `
background: linear-gradient(45deg, 
        #5221E6,
        #71bdd9, 
        #2E283D
        
    );
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
  } 
`

const Title = styled.div`
  font-weight: 900;
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  gap: .2rem;
`
const MainImgWrap = styled.div`
  width: 100%;
  border-radius: .5rem;
  text-align: center;
  ${gradientAnimation};
`
const MainImg = styled.img`
  width: 95%;
  
`

const TitleText = styled.div`
`

const TitleImg = styled.img`
  width: 3rem;
`

const AboutMeInfo = styled.div`
 width: 100%;
`
const AboutMeInfoTitle = styled.p<{ colors: Colors }>`
  color: ${({ colors }) => colors.text.gray};
  font-size: .7rem
`
const AboutMeInfoText = styled.p`
  font-size: .8rem
`

const ButtonsPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AdditionalButtons = styled.div`
  display: flex;
  width: 95%;
  gap: .4rem;
`
const Button = styled.img`
  width: 90%;
`
const ButtonWrap = styled.div<{ colors: Colors }>`
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
  padding: .3rem;
  border-radius: .2rem;
  background: ${({ colors }) => colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease; 

`

const MainButton = styled.div`
  text-align: center;
  border-radius: .5rem;
  padding: 1rem;
  width: 95%;
  cursor: pointer;
  ${gradientAnimation}
  transition: transform 0.3s ease, background-color 0.3s ease; 
    &:hover {
        transform: scale(1.05); 
    }
    &:active {
        transform: scale(0.98);  
    }
  
`

export const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
`;


const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(5px); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; 
`;


const ModalContainer = styled.div<{ isOpen: boolean }>`
    width: 400px;
    height: 400px;
    background: white; 
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s forwards; // Анимация
`;

export { ModalBackground, ModalContainer, Wrap, Title, TitleText, TitleImg, Content, MainImg, MainImgWrap, AboutMeInfo, AboutMeInfoTitle, AboutMeInfoText, InfoPart, ButtonsPart, MainButton, AdditionalButtons, Button, ButtonWrap}



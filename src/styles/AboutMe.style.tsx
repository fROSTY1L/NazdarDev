import styled  from "styled-components";
import { Colors } from "../variables/Colors";
import { nonSelectable } from "./NonSelectable";


const Wrap = styled.div<{colors: Colors}>`
  background: ${({ colors }) => colors.menu};
  height: calc(100vh);
  padding: 1rem;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  @media (max-width: 1300px){
      display: none;
    }
  ${({colors}) => colors.border == '' ? `` : `border-right: 1px solid ${colors.border}`}
  
  
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
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


const MainImgWrap = styled.div`
  width: 100%;
  border-radius: .5rem;
  text-align: center;
  ${gradientAnimation};
  ${nonSelectable};
`
const MainImg = styled.img`
  width: 95%;
  
`

const AboutMeInfo = styled.div`
 width: 100%;
`
const AboutMeInfoTitle = styled.p<{ colors: Colors }>`
  color: ${({ colors }) => colors.text.gray};
  font-size: .7rem;
  ${nonSelectable}
`
const AboutMeInfoText = styled.p<{ colors: Colors }>`
  font-size: .8rem;
  color: ${({ colors }) => colors.text.main};
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
  ${nonSelectable};
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
  color: #ffffff;
  ${nonSelectable}
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 475px) {
        width: 13.8rem; 
    }

`






export { Wrap, Content, MainImg, MainImgWrap, AboutMeInfo, AboutMeInfoTitle, AboutMeInfoText, InfoPart, ButtonsPart, MainButton, AdditionalButtons, Button, ButtonWrap}



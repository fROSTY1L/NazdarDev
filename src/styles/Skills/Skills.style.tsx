import styled, { keyframes } from "styled-components";
import { Colors } from "../../variables/Colors";
import { nonSelectable } from "../NonSelectable";

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


const fadeInFromTop = keyframes`
    0% {
        background-position: top;
        opacity: 0;
    }
    100% {
        background-position: center;
        opacity: 1;
    }
`;

const shake = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(1rem);
    }
`;

const Container = styled.section<{colors: Colors, url: string}>`
    height: 100vh;
    width: 100%;
    padding-right: 5rem;
    position: relative; 
    color: ${({colors}) => colors.text.main};
    padding: 5rem 5rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    

    @media(max-width: 1300px){
        display: block;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${({url}) => url});
        background-size: cover; 
        background-repeat: no-repeat;
        opacity: 0;
        animation: ${fadeInFromTop} 5s ease forwards, ${shake} 5s ease-in-out infinite; 
        z-index: -1; 
    }
`;
const Title = styled.div`
    font-size: 5rem;
    padding-bottom: 2rem;
`

const SkillsContainer = styled.div`

` 
const SkillWrap = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    ${nonSelectable}
`

const SkillTitle = styled.div`
    font-size: 3rem;
    cursor: pointer;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${slideDown} 0.5s forwards;
    gap: 1rem;
    padding-bottom: 1rem;
`

const Divider = styled.hr<{colors: Colors}>`
  color: ${({colors}) => colors.text.main};
`

const TechList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
`
const TechWrap = styled.div<{colors: Colors}>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background: ${({colors}) => colors.menu};
    height: 4rem;
    padding: .7rem;
    gap: 1rem;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`

const TechText = styled.div<{isVisible: string}>`
  display: ${({isVisible}) => isVisible}
  
`

const TechIcon = styled.img`
    height: 100%;
    width: fit-content;
    ${nonSelectable};
    
`

const OpenDescription = styled.img<{isOpen: boolean}>`
  height: 5rem;
  transition: transform 0.3s ease;
  ${({isOpen}) => isOpen && `transform: rotate(180deg)`}
`

export { Container, Title, SkillsContainer, SkillWrap, SkillTitle, Divider, TechList, TechText, TechIcon, TechWrap, Description, OpenDescription } 
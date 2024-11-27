import styled, { keyframes } from "styled-components";
import { Colors } from "../variables/Colors";

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
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(5px); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100; 
    @media(max-width: 475px){
        justify-content: center;
    }
`;

const ModalInstruction = styled.p<{colors: Colors}>`
    display: none;
    color: ${({colors}) => colors.text.gray}
    
`

const ModalContainer = styled.div<{ isOpen: boolean, colors: Colors }>`
    width: 40rem;
    height: 25rem;
    background: ${({colors}) => colors.bg}; 
    border-radius: 1rem; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: ${({colors}) => colors.text.main};
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 1s;
    @media(max-width: 475px){
        width: 97vw; 
        border-radius: .2rem; 
    }
`;

const ContactBarWrap = styled.div`
    height: 10rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-bottom: 1px solid white;
    &:last-child {
        border: none;
    }
`
const ContactBar = styled.div<{ bgColor: string, isClicked: boolean, hoveredColor: string}>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({bgColor}) => bgColor};
    transition: transform 1s ease, justify-content 1s ease, background 0.5s ease;
    ${({isClicked}) => isClicked ? 
        `
        padding-left: 1.4rem;
        transform: translateX(80%);
        justify-content: start;
        ` 
        : ``}
    &:hover{
        background: ${({hoveredColor}) => hoveredColor}
    }

    cursor: pointer;
    

`



const ContactBarText = styled.div<{colors: Colors}>`
    background: ${({colors}) => colors.menu};
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    padding-left: 2rem;
    padding-right: 3rem;
    margin-left: 2rem;
    margin-right: 6rem;
    border-radius: 1rem;
    width: 100%;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 475px){
        padding: .5rem .5rem;
    }
`



const ContactIcon = styled.img<{isClicked: boolean}>`
    height: 60%;
    @media(max-width: 475px){
        height: 40%;
        ${({isClicked}) => isClicked ?
        `margin-left: -.5rem`
        : ``
    }
    
`


export { ModalBackground, ModalContainer, ContactBar, ContactBarWrap, ContactIcon, ContactBarText, ModalInstruction }
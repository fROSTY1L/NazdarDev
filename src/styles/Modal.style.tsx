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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    backdrop-filter: blur(5px); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100; 
`;


const ModalContainer = styled.div<{ isOpen: boolean, colors: Colors }>`
    width: 40rem;
    height: 25rem;
    background: ${({colors}) => colors.bg}; 
    border-radius: 1rem; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: ${({colors}) => colors.text.main};
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    position: relative;
    overflow: hidden;
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 1s;
`;

const ContactBarWrap = styled.div`
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
const ContactBar = styled.div<{bgColor: string}>`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({bgColor}) => bgColor};
    transition: transform .3s ease;
    transition: justify-content .5 ease;
    ${ContactBarWrap}:hover &{
        padding-left: 1.4rem;
        transform: translateX(80%);
        justify-content: start; 
    }
    cursor: pointer;

    @media (max-width: 768px) {
        padding-left: 1.4rem; 
        transform: translateX(80%); 
        justify-content: start; 
    }

`

const ContactBarTextWrap = styled.div`

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
`



const ContactIcon = styled.img`
    height: 80%;
    
`


export { ModalBackground, ModalContainer, ContactBar, ContactBarWrap, ContactIcon, ContactBarText, ContactBarTextWrap }
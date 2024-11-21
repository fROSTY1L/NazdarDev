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
    z-index: 1000; 
`;


const ModalContainer = styled.div<{ isOpen: boolean, colors: Colors }>`
    width: 40rem;
    height: 25rem;
    background: ${({colors}) => colors.bg}; 
    border-radius: 1rem; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: ${({colors}) => colors.text.main};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: .5rem;
    padding: 1rem;
    position: relative;
    animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)}
`;

const Title = styled.div`
    font-size: 4rem;
`

const ContactContainer = styled.div`
    
`
const ContactWrap = styled.div<{colors: Colors}>`
    background: ${({colors}) => colors.menu}; 
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border-radius: 1rem;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`

const ContactTitle = styled.div<{colors: Colors}>`
    color: ${({colors}) => colors.text.gray};
    font-size: .8rem;
    padding-left: 1rem;
`
const ContactText = styled.div<{colors: Colors}>`
    padding-left: 1rem;
    cursor: pointer;
`

const ContactIconWrap = styled.div<{hex: string}>`
    height: 100%;
    background: ${({hex}) => hex};
    display: flex;
    align-items: center;
    justify-content: end;
    width: 4rem;
    padding-right: 1rem;
    border-radius: 0 1rem 1rem 0 ;
`
const RightColumn = styled.div`
    height: 100%;
    display: flex;
    justify-content: end; 
    gap: .3rem;
    align-items: center;
`

const ContactIcon = styled.img`
    height: 1.6rem;

`

const CopyIcon = styled.img`
    height: 1.5rem;
    cursor: pointer;
`

export {ModalBackground, ModalContainer, ContactContainer, ContactIcon, Title, ContactTitle, RightColumn, CopyIcon, ContactIconWrap, ContactText, ContactWrap}
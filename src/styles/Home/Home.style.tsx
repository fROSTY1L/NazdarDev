import styled, { keyframes } from "styled-components";

export const fadeInFromTop = keyframes`
    0% {
        background-position: bottom;
        opacity: 0;
    }
    100% {
        background-position: center;
        opacity: 1;
    }
`;

export const shake = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-1rem);
    }
`;

const Wrap = styled.section<{url: string}>`
    color: white;
    height: 100vh;
    position: relative;
    z-index: 4;
    &::before {
        z-index: -20;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 15rem;
        background-image: url(${({url}) => url});
        background-size: 100%;
        background-repeat: no-repeat;
        opacity: 0;
        animation: ${fadeInFromTop} 5s ease forwards, ${shake} 5s ease-in-out infinite; 
         @media(max-width: 475px){
          background-size: 170%;
          }
    }
     @media(max-width: 475px){
        font-size: 1rem;
        
         
    }
`;



const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 2rem;
    position: relative;
    @media (max-width: 716px) {
        display: flex;
        flex-direction: column;
        gap: 1rem; 
    }
    @media(max-width: 475px){
        padding-bottom: 5rem;
        justify-content: space-between;
        height: 100%;
        
    }
`;

export { Wrap, ButtonsContainer };

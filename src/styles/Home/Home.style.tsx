import styled, { keyframes } from "styled-components";

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
        transform: translateY(-1rem);
    }
`;

const Wrap = styled.section<{url: string}>`
    color: white;
    height: 100vh;
    overflow: hidden; 
    position: relative;
    z-index: -20;
    &::before {
        z-index: -20;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 10rem;
        background-image: url(${({url}) => url});
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0;
        animation: ${fadeInFromTop} 5s ease forwards, ${shake} 5s ease-in-out infinite; 
    }
    @media(max-width: 475px) {
        font-size: 1rem;
        padding-left: .1rem;  
    }
`;

const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 2rem;

    @media (max-width: 716px) {
        display: flex;
        flex-direction: column;
        gap: 1rem; 
    }
`;

export { Wrap, ButtonsContainer };

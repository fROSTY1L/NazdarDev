import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    height: 4rem;
    gap: 1rem;
    align-items: center;
    cursor: pointer;
    z-index: 5;
    padding-right: 1.2rem;
    background: rgba(255, 255, 255, 0);
    @media (max-width: 768px) {
        height: 3rem; 
        padding-right: 0.8rem; 
        gap: 0.5rem; 
    }
    @media(max-width: 430px) {
        height: 2rem;
    }
`;

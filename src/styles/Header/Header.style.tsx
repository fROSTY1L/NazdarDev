import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: calc(100vw - 18.6rem);
    height: 4rem;
    justify-content: end;
    gap: 1rem;
    align-items: center;
    margin: 0 2rem;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 100vw;
      justify-content: space-between;
    }
      
`

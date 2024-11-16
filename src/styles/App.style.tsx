import styled from "styled-components";

const Content = styled.div`
    position: relative;
`

const GlobalWrap = styled.div`
    width: 100vw;
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: calc(18rem) calc(100vw - 18rem);
    }
    
`

export { Content, GlobalWrap }
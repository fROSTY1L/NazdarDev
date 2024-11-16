import styled from "styled-components";

const Wrap = styled.div<{url: string}>`
    position: relative;
    color: white;
    background-image: url(${({url}) => url}); 
    background-size:cover;
    height: 100vh;
    
    
`



export { Wrap }


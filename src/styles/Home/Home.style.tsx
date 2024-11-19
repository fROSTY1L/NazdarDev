import styled from "styled-components";

const Wrap = styled.section<{url: string}>`
    position: relative;
    color: white;
    background-image: url(${({url}) => url}); 
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100vh;
`

export { Wrap }


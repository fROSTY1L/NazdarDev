import styled from "styled-components";
import { Colors } from "../../variables/Colors";
import { nonSelectable } from "../NonSelectable";

const Container = styled.div<{colors: Colors}>`
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 4rem;
    width: fit-content;
    padding: .3rem .7rem;
    border-radius: 1rem;
    cursor: pointer;
    background: ${({colors}) => colors.menu};
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    border: 1px solid ${({colors}) => colors.text.main};
    ${nonSelectable};
    @media(max-width: 475px) {
        height: 2.5rem;
        border-radius: .5rem;
        padding: .1rem .5rem;  
    }
`

const Icon = styled.img`
    height: 60%;
`

const Text = styled.div<{colors: Colors}>`
    font-size: 1.2rem;
    @media(max-width: 475px) {
        font-size: .9rem;
        
    }
    color: ${({colors}) => colors.text.main}
`

export { Container, Icon, Text }

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
    background: ${({colors}) => colors.menu};
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    border: 1px solid ${({colors}) => colors.text.main};
    ${nonSelectable}
`

const Icon = styled.img`
    height: 60%;
`

const Text = styled.div<{colors: Colors}>`
    font-size: 1.2rem;
    color: ${({colors}) => colors.text.main}
`

export { Container, Icon, Text }

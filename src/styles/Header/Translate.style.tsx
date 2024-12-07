import styled from "styled-components";
import { Colors } from "../../variables/Colors";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

const Title = styled.div`

`

const IconWrap = styled.div<{colors: Colors}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.8rem;
    background: ${({colors}) => colors.bg};
    border-radius: .6rem;
    padding: .4rem;
`

const Icon = styled.img`
    height: 90%;
    border-radius: 3px;
`


export {Container, Title, IconWrap, Icon}

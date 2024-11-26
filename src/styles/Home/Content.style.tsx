import styled from "styled-components";
import { Colors } from "../../variables/Colors";
import { nonSelectable } from "../NonSelectable";

const ContentWrap = styled.div`
    display: flex;
    height: calc(100vh - 4rem);
    padding-left: 4rem;
    padding-top: 10rem;
    justify-content: space-between;
    @media(max-width: 740px){
        padding: 0rem;
    }
    
    ${nonSelectable};
    
`

const TitleWrap = styled.div<{colors: Colors}>`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    color: ${({colors}) => colors.text.main}
`

const MoreInfoWrap = styled.div`
    display: flex;
    align-items: end;
    margin: 3rem; 
`

const Name = styled.p`
    font-size: 4rem;
    @media(max-width: 740px){
        font-size: 2rem;
    }
        
`
const Title = styled.p`
    font-size: 8rem;
    margin-bottom: 2rem;
    @media(max-width: 740px){
        font-size: 4rem;
    }
`


export { ContentWrap, TitleWrap, Name, Title, MoreInfoWrap }
import styled from "styled-components";
import { fadeInFromTop, shake } from "../Home/Home.style";
import { Colors } from "../../variables/Colors";

const Wrap = styled.section<{url: string}>`
    color: white;
    min-height: 100vh;
    position: relative;
    z-index: 4;
    overflow: hidden;
    &::before {
        z-index: -20;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: -1rem;
        background-image: url(${({url}) => url});
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0;
        
        animation: ${fadeInFromTop} 5s ease forwards, ${shake} 5s ease-in-out infinite; 
         @media(max-width: 475px){
          background-size: 170%;
          }
    }
     @media(max-width: 475px){
        font-size: 1rem;  
        height: fit-content;
    }
    
`
const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    padding-bottom: 2rem;
    @media(max-width: 475px) {
        font-size: 3rem;
        padding-bottom: .5rem;
    }
`

const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 5rem;
    gap: 2rem;
    @media(max-width: 1200px){
        padding: 1rem;
        padding-left: 4rem;
    }
    position: relative;
`

const ProjectWrap = styled.div<{isPicLeft: boolean, colors: Colors}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    background: ${({colors}) => colors.menu};
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    ${({isPicLeft}) => !isPicLeft && `flex-direction: row-reverse;`}
    @media(max-width: 1200px){
        flex-direction: column-reverse;
        padding: .2rem;
        justify-content: center;
        
    }
`

const ProjectPic = styled.img`
    width: 30%;
    border-radius: .4rem;
    @media(max-width: 1200px){
        display: none;
    }
`

const ProjectText = styled.div`
    height: 100%;
    width: 50%;
    @media(max-width: 1200px){
        width: 100%;
        
    }
    
`

const ProjectTitle = styled.div`
    font-size: 3rem;
    @media(max-width: 1200px){
        font-size: 2.3rem;
        text-align: center;
    }
    
`

const ProjectContent = styled.div`
    font-size: 1.5rem;
    padding-top: 3rem;
    @media(max-width: 1200px){
        font-size: 1.1rem;
        text-align: center;
    }
    
`

export { Wrap, Title, Content, ProjectWrap, ProjectPic, ProjectText, ProjectTitle, ProjectContent }


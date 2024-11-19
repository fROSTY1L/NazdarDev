import styled, { keyframes } from "styled-components";
import { Colors } from "../../variables/Colors";

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.section<{colors: Colors, url: string}>`
    height: 100vh;
    width: 100%;
    padding-right: 5rem;
    background: ${({colors}) => colors.bg}
    position: relative;
    background-image: url(${({url}) => url}); 
    background-size: 100%;
    background-repeat: no-repeat;
    color: ${({colors}) => colors.text.main};
    padding: 2rem 5rem;

`
const SkillWrap = styled.div`
    display: flex; 
    justify-content: space-between;
`

const SkillTitle = styled.div`
    font-size: 5rem;
    cursor: pointer;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    animation: ${slideDown} 0.5s forwards;
    gap: 1rem;
    padding-bottom: 1rem;
`

const Divider = styled.hr`

`

const TechList = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const TechIcon = styled.img`
    height: 3rem;
    width: fit-content;
`

export { Container, SkillWrap, SkillTitle, Divider, TechList, TechIcon, Description }
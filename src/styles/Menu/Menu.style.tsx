import styled from "styled-components";
import { Colors } from "../../variables/Colors";
import { nonSelectable } from "../NonSelectable";


const Wrap = styled.div<{colors: Colors, isOpen: boolean}>`
    ${({isOpen}) => isOpen ? `width: 15rem;` : `width: 3.5em; `}
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: .5rem;
    background: ${({colors}) => colors.menu};
    color: ${({colors}) => colors.text.main};
    transition: width .3s ease;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 475px){
        ${({isOpen}) => isOpen ? `width: 90vw;` : `width: 2.5rem; padding: .6rem`}
    }
    z-index: 6;    
`

const OpenIcon = styled.img<{isOpen: boolean}>`
    width: 1.5rem;
    cursor: pointer;
    ${({isOpen}) => !isOpen && ' transform: rotate(180deg);'};
`

const ButtonWrap = styled.div<{colors: Colors, isInfo: boolean, isMoreInfo: boolean, isOpen: boolean}>`
    position: relative;
    ${({isInfo}) => isInfo && `padding-top: .5rem;`}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2rem;
     ${({isOpen,colors}) => isOpen ? `background: ${colors.bg};` : `background: ${colors.menu};`}
    border-radius: 2rem
    z-index: 7;
    overflow: hidden;
    ${nonSelectable}
    
    
`

const MoreInfoWrap = styled.div<{colors: Colors}>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({colors}) => colors.menu};
    height: 2rem;
    ${nonSelectable}
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    cursor: pointer;
    
`

const InfoIcon = styled.img`
    
    width: 1.5rem;
`

const InfoIconWrap = styled.div<{isOpen: boolean}>`
    height: 2rem;

    ${({isOpen}) => isOpen && `display: none`}
`

const InfoPart = styled.div<{isOpen: boolean, colors: Colors}>`
    border-bottom-right-radius: .3rem;
    border-bottom-left-radius: .3rem;
    width: 100%;
    background: ${({colors}) => colors.bg};
    padding: 0 .5rem;
    color: ${({colors}) => colors.text.main};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    ${({isOpen}) => !isOpen && `
        display: none;
    `}
    padding-bottom: 1rem;
    z-index: 5;
    
`

const SectionWrap = styled.div<{isOpen: boolean}>`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    ${({isOpen}) => !isOpen && `height: 2.3rem`}
`

const InfoString = styled.div`
    margin: .2rem;
`

const InfoStringTitle = styled.div`
    font-size: .8rem;
`

const InfoStringText = styled.div`

`

const Contacts = styled.div<{isOpen: boolean}>`
    display: flex;
    transition: max-height 0.5s ease-out;
    ${({isOpen}) => !isOpen && `
        max-height: 0;
    `}
`

const Half = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    overflow-y: auto;
`

export { Wrap, OpenIcon, ButtonWrap, InfoIcon, InfoIconWrap, InfoPart, InfoString, InfoStringTitle, InfoStringText, Half, SectionWrap, Contacts, MoreInfoWrap }
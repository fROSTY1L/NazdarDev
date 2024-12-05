import styled from "styled-components";
import { Colors } from "../../variables/Colors";
import { nonSelectable } from "../NonSelectable";


const Wrap = styled.div<{colors: Colors, isOpen: boolean}>`
    ${({isOpen}) => isOpen ? `width: 15rem;` : `width: 3.5em;`}
    height: 100vh;
    position: fixed;
    padding: .5rem;
    background: ${({colors}) => colors.menu};
    color: ${({colors}) => colors.text.main};
    transition: width .3s ease;
    z-index: 5;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 475px){
        width: 80vw;
    }
        
`

const OpenIcon = styled.img<{isOpen: boolean}>`
    width: 1.6rem;
    ${({isOpen}) => !isOpen && ' transform: rotate(180deg);'};
`

const ButtonWrap = styled.div<{colors: Colors, isInfo: boolean, isMoreInfo: boolean}>`
    position: relative;
    ${({isInfo}) => isInfo && `padding-top: .5rem;`}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2rem;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    background: ${({colors}) => colors.bg};
    border-radius: 2rem
    z-index: 7;
    overflow: hidden;
    ${nonSelectable}
    cursor: pointer;
`

const MoreInfoWrap = styled.div<{colors: Colors}>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({colors}) => colors.menu};
    height: 2rem;
    ${nonSelectable}
    cursor: pointer;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`

const InfoIcon = styled.img`
    width: 2rem;
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
    max-height: 20rem;
    overflow: hidden;
    box-shadow: 0px 10px 10px 2px rgba(34, 60, 80, 0.2);
    transition: max-height 0.5s ease-out;
    ${({isOpen}) => !isOpen && `
        max-height: 0;
    `}
    padding-bottom: .5rem;
    z-index: 5;
`

const SectionWrap = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`

export { Wrap, OpenIcon, ButtonWrap, InfoIcon, InfoIconWrap, InfoPart, InfoString, InfoStringTitle, InfoStringText, Half, SectionWrap, Contacts, MoreInfoWrap }
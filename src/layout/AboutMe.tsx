import { AboutMeInfo, AboutMeInfoText, AboutMeInfoTitle, AdditionalButtons, Button, ButtonsPart, ButtonWrap, Content, InfoPart, MainButton, MainImg, MainImgWrap, Title, TitleImg, TitleText, Wrap } from "../styles/AboutMe.style"
import logo from "../assets/AboutMe/logo.png"
import mainImg from "../assets/AboutMe/bat.png"
import discord from "../assets/AboutMe/buttons/discord.png"
import vk from "../assets/AboutMe/buttons/vk.png"
import telegram from "../assets/AboutMe/buttons/telegram.png"
import github from "../assets/AboutMe/buttons/github.png"

const AboutMe = () => {
  return (
    <Wrap>
      <Content>
        <InfoPart>
        <Title>
            <TitleImg src={logo}/>
            <TitleText>
                <p>Nazdar</p>
                <p>Bolloev</p>
            </TitleText>
        </Title>
        <MainImgWrap>
          <MainImg src={mainImg}/>
        </MainImgWrap>
        <AboutMeInfo>
          <AboutMeInfoTitle>
            speciality
          </AboutMeInfoTitle>
          <AboutMeInfoText>
            React developer 
          </AboutMeInfoText>
        </AboutMeInfo>
        <AboutMeInfo>
          <AboutMeInfoTitle>
            date of birth
          </AboutMeInfoTitle>
          <AboutMeInfoText>
            16.11.2004
          </AboutMeInfoText>
        </AboutMeInfo>
        <AboutMeInfo>
          <AboutMeInfoTitle>
            live in
          </AboutMeInfoTitle>
          <AboutMeInfoText>
            Tula, Russia
          </AboutMeInfoText>
        </AboutMeInfo>
        <AboutMeInfo>
          <AboutMeInfoTitle>
            socials
          </AboutMeInfoTitle>
          <AdditionalButtons>
            <ButtonWrap className="github">
              <Button  src={github}/>
            </ButtonWrap>
            <ButtonWrap className="vk">
              <Button  src={vk}/>
            </ButtonWrap>
            <ButtonWrap className="telegram">
              <Button src={telegram}/>
            </ButtonWrap>
            <ButtonWrap className="discord">
              <Button src={discord}/>
            </ButtonWrap>   
            </AdditionalButtons>
          </AboutMeInfo>
        </InfoPart>
        <ButtonsPart>
          
          <MainButton>
            Let's work together
          </MainButton>
        </ButtonsPart>
        </Content>
    </Wrap>
  )
}

export default AboutMe

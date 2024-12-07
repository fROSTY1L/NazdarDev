import { useTranslation } from "react-i18next"
import Button from "../components/Home/Button"
import MoreInfo from "../components/Home/MoreInfo"
import { ContentWrap, MoreInfoWrap, Name, Title, TitleText, TitleWrap } from "../styles/Home/Content.style"
import { ButtonsContainer, Wrap } from "../styles/Home/Home.style"
import image from './../assets/Home/Background.png'
import { useColors } from "../variables/Colors"
import LetsWorkButton from "../components/AboutMe/LetsWorkButton"


const Home = () => {
  const { t } = useTranslation();
  const colors = useColors()
  return (
    <Wrap url={image} id="home">
      <ContentWrap>
        <TitleWrap colors={colors}>
          <TitleText>
            <Name>
              {t('Home.title.name')}
            </Name>
            <Title>
            {t('Home.title.specialty')}
            </Title>
          </TitleText>
          <ButtonsContainer>
            <Button text={t('Home.button')} theme="dark"/>
            <LetsWorkButton text={t('AboutMe.mainButton')}/>
          </ButtonsContainer>
        </TitleWrap>
        <MoreInfoWrap>
          <MoreInfo/>
        </MoreInfoWrap>
      </ContentWrap>
    </Wrap>
  )
}

export default Home

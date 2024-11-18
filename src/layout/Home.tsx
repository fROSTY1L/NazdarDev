import { useTranslation } from "react-i18next"
import Button from "../components/Home/Button"
import MoreInfo from "../components/Home/MoreInfo"
import { ContentWrap, MoreInfoWrap, Name, Title, TitleWrap } from "../styles/Home/Content.style"
import { Wrap } from "../styles/Home/Home.style"
import image from './../assets/Home/Background.png'
import Header from "./Header"
import { useColors } from "../variables/Colors"

const Home = () => {
  const { t } = useTranslation();
  const colors = useColors()
  return (
    <Wrap url={image}>
      <Header/>
      <ContentWrap>
        <TitleWrap colors={colors}>
          <Name>
            {t('Home.title.name')}
          </Name>
          <Title>
          {t('Home.title.specialty')}
          </Title>
          <Button text={t('Home.button')} theme="dark"></Button>
        </TitleWrap>
        <MoreInfoWrap>
          <MoreInfo/>
        </MoreInfoWrap>
        
      </ContentWrap>
    </Wrap>
  )
}

export default Home

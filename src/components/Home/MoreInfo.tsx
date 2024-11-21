import { Container, Icon, RoundText } from "../../styles/Home/MoreInfo.style"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useTranslation } from "react-i18next"
import roundRuLight from '../../assets/Home/MoreInfo/light/ru/text.png'
import roundEnLight from '../../assets/Home/MoreInfo/light/en/text.png'
import roundEnDark from '../../assets/Home/MoreInfo/dark/en/text.png'
import roundRuDark from '../../assets/Home/MoreInfo/dark/ru/text.png'
import iconLight from '../../assets/Home/MoreInfo/light/icon.png'
import iconDark from '../../assets/Home/MoreInfo/dark/icon.png'

const MoreInfo = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const { i18n } = useTranslation();
  
  let round = ''
  const currentLanguage = i18n.language;
  if (currentLanguage == 'ru') {
    round = theme == 'dark' ? roundRuDark : roundRuLight
  }
  else {
    round = theme == 'dark' ? roundEnDark : roundEnLight 
  }
  const icon = theme == 'dark' ? iconDark : iconLight
  

  return (
    <Container>
      <RoundText src={round} alt="Round Text" /> 
      <Icon src={icon} alt="Icon" />
    </Container>
  )
}

export default MoreInfo

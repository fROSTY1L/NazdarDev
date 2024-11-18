import { Container, Icon, RoundText } from "../../styles/Home/MoreInfo.style"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { useTranslation } from "react-i18next"


const MoreInfo = () => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const { i18n } = useTranslation();
  
  const currentLanguage = i18n.language;
  const round = `src/assets/Home/MoreInfo/${theme}/${currentLanguage}/text.png`
  const icon = `src/assets/Home/MoreInfo/${theme}/icon.png`

  return (
    <Container>
      <RoundText src={round} alt="Round Text" /> 
      <Icon src={icon} alt="Icon" />
    </Container>
  )
}

export default MoreInfo

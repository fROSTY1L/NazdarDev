import { useTranslation } from "react-i18next"
import Button from "../components/Header/Button"
import DropDownSettings from "../components/Header/DropDownSettings/DropDownSettings"
import { Container } from "../styles/Header/Header.style"

const Header = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Button text={t('Header.buttons.home')}/>
      <Button text={t('Header.buttons.skills')}/>
      <Button text={t('Header.buttons.about')}/>
      <Button text={t('Header.buttons.projects')}/>
      <DropDownSettings/>
    </Container>
    
  )
}

export default Header

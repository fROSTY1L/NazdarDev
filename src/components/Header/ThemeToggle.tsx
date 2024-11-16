import { useDispatch, useSelector } from "react-redux"
import { Container, Icon, IconWrap, Title } from "../../styles/Header/ToggleTheme.style"
import { setTheme } from "../../store/themeReducer"
import { useColors } from "../../variables/Colors"
import { useTranslation } from "react-i18next"
import dark from "../../assets/Header/toggle theme/dark.png"
import light from "../../assets/Header/toggle theme/light.png"
import { RootState } from "../../store"


const ThemeToggle = () => {
  const dispatch = useDispatch()
  const colors = useColors()
  const { t } = useTranslation()

  const theme = useSelector((state: RootState) => state.theme.theme)
  const toggleTheme = () => {
    dispatch(setTheme())
  }
  return (
    <Container onClick={toggleTheme}>
      <Title>{theme == 'dark' ? t('Header.settings.lightTheme') : t('Header.settings.darkTheme')}</Title>
      <IconWrap colors={colors}>
        <Icon src={theme == 'dark' ? light : dark}/>
      </IconWrap>
      </Container>
  )
}

export default ThemeToggle

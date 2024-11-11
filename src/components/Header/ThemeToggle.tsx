import { useDispatch } from "react-redux"
import { Container, ThemeImg } from "../../styles/Header/ToggleTheme.style"
import { setTheme } from "../../store/themeReducer"
import themeImg from '../../assets/Header/toggle theme/night-mode.png'

const ThemeToggle = () => {
  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch(setTheme())
  }
  return (
    <Container onClick={toggleTheme}>
      <ThemeImg src={themeImg}/>
      </Container>
  )
}

export default ThemeToggle

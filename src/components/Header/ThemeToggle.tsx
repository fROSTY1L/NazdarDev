import { useDispatch } from "react-redux"
import { Container, Input, Label, Span } from "../../styles/Header/ToggleTheme.style"
import { setTheme } from "../../store/themeReducer"

const ThemeToggle = () => {
  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch(setTheme())
  }
  return (
    <Container>
        <Label>
          <Input type="checkbox" onChange={toggleTheme} />
          <Span></Span>
        </Label>
      </Container>
  )
}

export default ThemeToggle

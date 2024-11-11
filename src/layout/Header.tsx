import Button from "../components/Header/Button"
import ThemeToggle from "../components/Header/ThemeToggle"
import { Container } from "../styles/Header/Header.style"

const Header = () => {
  return (
    <Container>
      <Button text="Home"/>
      <Button text="Skills"/>
      <Button text="About me"/>
      <Button text="Projects"/>
      <ThemeToggle/>
    </Container>
    
  )
}

export default Header

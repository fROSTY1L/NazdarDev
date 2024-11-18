import { Container, Icon, Text } from "../../styles/Home/Button.style"
import { useColors } from "../../variables/Colors"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
interface ButtonProps{
  text: string,
  theme: 'light' | 'dark'
}

const Button = (props: ButtonProps) => {
  const colors = useColors()
  const theme = useSelector((state: RootState) => state.theme.theme)
  const iconSrc =  `src/assets/Home/Button/${theme}/icon.png`
  return (
    <Container colors={colors}>
      <Text colors={colors}>{props.text}</Text>
      <Icon src={iconSrc}/>
    </Container>
  )
}

export default Button

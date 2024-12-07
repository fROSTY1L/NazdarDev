import { Container, Icon, Text } from "../../styles/Home/Button.style"
import { useColors } from "../../variables/Colors"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import iconDark from '../../assets/Home/Button/dark/icon.png'
import iconLight from '../../assets/Home/Button/light/icon.png'


interface ButtonProps{
  text: string,
  theme: 'light' | 'dark'
}

const Button = (props: ButtonProps) => {
  const colors = useColors()
  const theme = useSelector((state: RootState) => state.theme.theme)
  const iconSrc =  theme == 'dark' ? iconDark : iconLight

  const handleClick = () => {
    window.open('https://github.com/fROSTY1L', '_blank'); 
  }
  return (
    <Container colors={colors} onClick={handleClick}>
      <Text colors={colors}>{props.text}</Text>
      <Icon src={iconSrc}/>
    </Container>
  )
}

export default Button

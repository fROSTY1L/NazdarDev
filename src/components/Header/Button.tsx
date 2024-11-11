import { ButtonWrap } from "../../styles/Header/Button.style"
import { useColors } from "../../variables/Colors"

interface ButtonProps {
    text: string
}
const Button = (props: ButtonProps) => {
    const colors = useColors()
  return (
    <ButtonWrap colors={colors}>
        {props.text}
    </ButtonWrap>
  )
}

export default Button

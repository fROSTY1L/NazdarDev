import { CopyIcon } from "../styles/Modal.style"
import iconLight from '../assets/AboutMe/buttons/light-copied.png'
import iconDark from '../assets/AboutMe/buttons/dark-copied.png'
import { useSelector } from "react-redux"
import { RootState } from "../store"

interface CopyProps {
    text: string
}

const CopyebleText = (props: CopyProps) => {
    const handleClick = () => navigator.clipboard.writeText(props.text)
    const theme = useSelector((state: RootState) => state.theme.theme)
    const icon = theme == 'dark' ? iconDark : iconLight
  return (
    <CopyIcon src={icon} onClick={handleClick}>
      
    </CopyIcon>
  )
}

export default CopyebleText

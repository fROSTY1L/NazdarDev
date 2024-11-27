import { useDispatch } from "react-redux"
import { MainButton } from "../../styles/AboutMe.style"
import { setModalState } from "../../store/modalReducer"

interface ButtonProps {
  text: string
}

const LetsWorkButton = (props: ButtonProps) => {
  
  const dispatch = useDispatch()

  return (
      <MainButton onClick={() => dispatch(setModalState(true))}>
        {props.text}
      </MainButton> 
  )
}

export default LetsWorkButton

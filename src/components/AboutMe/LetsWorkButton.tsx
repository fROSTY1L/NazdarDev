import { useDispatch } from "react-redux"

import { setModalState } from "../../store/modalReducer"
import { MainButton } from "../../styles/Home/LetsWorkButton.style"

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

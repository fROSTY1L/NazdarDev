import { useDispatch, useSelector } from "react-redux"
import { MainButton } from "../../styles/AboutMe.style"
import { setModalState } from "../../store/modalReducer"
import { RootState } from "../../store"
import Modal from "./Modal"

interface ButtonProps {
  text: string
}

const LetsWorkButton = (props: ButtonProps) => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  const dispatch = useDispatch()

  return (
    <>
      <MainButton onClick={() => dispatch(setModalState(true))}>
        {props.text}
      </MainButton>
      {isOpen && <Modal/>}
    </>
  )
}

export default LetsWorkButton

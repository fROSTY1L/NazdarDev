import { useSelector } from "react-redux"
import Header from "./layout/Header"
import Home from "./layout/Home"
import Skills from "./layout/Skills"
import { GlobalWrap } from "./styles/App.style"
import { GlobalStyle } from "./styles/GlobalStyle"
import { useColors } from "./variables/Colors"
import { RootState } from "./store"
import Modal from "./components/AboutMe/Modal"
import Menu from "./layout/Menu"
import ModalForMoreInfo from "./components/AboutMe/ModalForMoreInfo"
import Projects from "./layout/Projects"

function App() {
  const colors = useColors()
  const isOpenModal = useSelector((state: RootState) => state.modal.isOpen)
  const isOpenMoreInfo = useSelector((state: RootState) => state.modal.isMoreInfo)

  return (
    <>
      <GlobalStyle colors={colors}/>
        {isOpenModal && <Modal/>}
        {isOpenMoreInfo && <ModalForMoreInfo/>}
        <GlobalWrap isBlur={isOpenModal}>
          <Menu/>
          <Header/>
          <Home/>
          <Skills/>
          <Projects/>
      </GlobalWrap>
    </>
  )
}

export default App

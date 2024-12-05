import { useSelector } from "react-redux"
import Header from "./layout/Header"
import Home from "./layout/Home"
import Skills from "./layout/Skills"
import { Content, GlobalWrap } from "./styles/App.style"
import { GlobalStyle } from "./styles/GlobalStyle"
import { useColors } from "./variables/Colors"
import { RootState } from "./store"
import Modal from "./components/AboutMe/Modal"
import Menu from "./layout/Menu"

function App() {
  const colors = useColors()
  const isOpenModal = useSelector((state: RootState) => state.modal.isOpen)
  return (
    <>
      <GlobalStyle colors={colors}/>
        {isOpenModal && <Modal/>}
        <GlobalWrap isBlur={isOpenModal}>
          <Menu/>
          <Content colors={colors}>
            <Header/>
            <Home/>
            <Skills/>
          </Content>
      </GlobalWrap>
    </>
  )
}

export default App

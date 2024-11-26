import { useSelector } from "react-redux"
import AboutMe from "./layout/AboutMe"
import Header from "./layout/Header"
import Home from "./layout/Home"
import Skills from "./layout/Skills"
import { Content, GlobalWrap, LeftMenu } from "./styles/App.style"
import { GlobalStyle } from "./styles/GlobalStyle"
import { useColors } from "./variables/Colors"
import { RootState } from "./store"
import Modal from "./components/AboutMe/Modal"

function App() {
  const colors = useColors()
  const isOpen = useSelector((state: RootState) => state.modal.isOpen)
  
  return (
    <>
      <GlobalStyle colors={colors}/>
        {isOpen && <Modal/>}
        <GlobalWrap isBlur={isOpen}>
          <LeftMenu >
            <AboutMe/>
          </LeftMenu> 
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

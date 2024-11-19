import AboutMe from "./layout/AboutMe"
import Header from "./layout/Header"
import Home from "./layout/Home"
import Skills from "./layout/Skills"
import { Content, GlobalWrap, LeftMenu } from "./styles/App.style"
import { GlobalStyle } from "./styles/GlobalStyle"
import { useColors } from "./variables/Colors"

function App() {
  const colors = useColors()

  return (
    <>
      <GlobalStyle colors={colors}/>
        <GlobalWrap>
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

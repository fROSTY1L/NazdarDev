import AboutMe from "./layout/AboutMe"
import Home from "./layout/Home"
import { Content, GlobalWrap } from "./styles/App.style"
import { GlobalStyle } from "./styles/GlobalStyle"
import { useColors } from "./variables/Colors"

function App() {
  const colors = useColors()

  return (
    <>
      <GlobalStyle colors={colors}/>
        <GlobalWrap>
          <AboutMe/>
        <Content>
          <Home/>
        </Content>
      </GlobalWrap>
    </>
  )
}

export default App

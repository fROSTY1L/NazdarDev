import AboutMe from "./layout/AboutMe"
import Header from "./layout/Header"
import { Content, Controls } from "./styles/App.style"
import { GlobalStyle } from "./styles/GlobalStyle"
import { useColors } from "./variables/Colors"

function App() {
  const colors = useColors()

  return (
    <>
      <GlobalStyle colors={colors}/>
      <Controls>
        <AboutMe/>
        <Header/>
      </Controls>
      <Content>
        
      </Content>
      
    </>
  )
}

export default App

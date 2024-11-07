import AboutMe from "./layout/AboutMe"
import Header from "./layout/Header"
import { GlobalStyle } from "./styles/GlobalStyle"
import { useColors } from "./variables/Colors"

function App() {
  const colors = useColors()

  return (
    <>
      <GlobalStyle colors={colors}/>
      <AboutMe/>
      <Header/>
    </>
  )
}

export default App

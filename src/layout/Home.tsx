import { Wrap } from "../styles/Home/Home.style"
import image from './../assets/Home/Dark Gradient.png'
import Header from "./Header"

const Home = () => {
  return (
    <Wrap url={image}>
      <Header/>
    </Wrap>
  )
}

export default Home

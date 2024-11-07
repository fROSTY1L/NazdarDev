import { AboutMeInfo, AboutMeInfoText, AboutMeInfoTitle } from "../../styles/AboutMe.style"
import { useColors } from "../../variables/Colors"

interface InfoStringProps {
    title: string,
    text: string
}

const InfoString = (props: InfoStringProps) => {
  const colors = useColors()
  
  return (
    <AboutMeInfo>
        <AboutMeInfoTitle colors={colors}>
          {props.title}
        </AboutMeInfoTitle>
        <AboutMeInfoText>
          {props.text}
        </AboutMeInfoText>
    </AboutMeInfo>
  )
}

export default InfoString

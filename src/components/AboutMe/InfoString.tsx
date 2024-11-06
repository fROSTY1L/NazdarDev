import { AboutMeInfo, AboutMeInfoText, AboutMeInfoTitle } from "../../styles/AboutMe.style"

interface InfoStringProps {
    title: string,
    text: string
}

const InfoString = (props: InfoStringProps) => {
  return (
    <AboutMeInfo>
        <AboutMeInfoTitle>
          {props.title}
        </AboutMeInfoTitle>
        <AboutMeInfoText>
          {props.text}
        </AboutMeInfoText>
    </AboutMeInfo>
  )
}

export default InfoString

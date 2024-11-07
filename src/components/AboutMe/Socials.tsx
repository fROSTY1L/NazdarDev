import { AboutMeInfo, AboutMeInfoTitle, AdditionalButtons, Button, ButtonWrap } from "../../styles/AboutMe.style"
import { useColors } from "../../variables/Colors"

interface InfoStringProps {
    title: string,
    image: string[]
}

const Socials = (props: InfoStringProps) => {
  const colors = useColors()
  return (
    <AboutMeInfo>
        <AboutMeInfoTitle colors={colors}>
          {props.title}
        </AboutMeInfoTitle>
        <AdditionalButtons>
            {props.image.map((img: string) => {
                const className = img.split('/').pop()?.split('.')[0]; 
                return (
                    <ButtonWrap colors={colors} key={img} className={className}>
                        <Button src={img}/>  
                    </ButtonWrap>)}
                )}
            </AdditionalButtons>
    </AboutMeInfo>
  )
}

export default Socials

import { AboutMeInfo, AboutMeInfoTitle, AdditionalButtons, Button, ButtonWrap } from "../../styles/AboutMe.style"

interface InfoStringProps {
    title: string,
    image: string[]
}

const Socials = (props: InfoStringProps) => {

  return (
    <AboutMeInfo>
        <AboutMeInfoTitle>
          {props.title}
        </AboutMeInfoTitle>
        <AdditionalButtons>
            {props.image.map((img: string) => {
                const className = img.split('/').pop()?.split('.')[0]; 
                return (
                    <ButtonWrap key={img} className={className}>
                        <Button src={img}/>  
                    </ButtonWrap>)}
                )}
            </AdditionalButtons>
    </AboutMeInfo>
  )
}

export default Socials

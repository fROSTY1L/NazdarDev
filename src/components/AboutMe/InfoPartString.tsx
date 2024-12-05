import { InfoString, InfoStringText, InfoStringTitle } from '../../styles/Menu/Menu.style'

interface StringProps {
    title: string,
    text: string
}

const InfoPartString = (props: StringProps) => {
  return (
    <InfoString>
        <InfoStringTitle>
            {props.title}
        </InfoStringTitle>
        <InfoStringText>
            {props.text}
        </InfoStringText>
  </InfoString>
  )
}

export default InfoPartString

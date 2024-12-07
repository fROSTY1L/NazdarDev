import { Paragraph, Text, Title } from "../../styles/Modal.style"

interface InfoStringProps {
    title: string,
    text: string
}

const MoreInfoString = (props: InfoStringProps) => {
  return (
    <Paragraph>
        <Title>
            {props.title}
        </Title>
        <Text>
            {props.text}
        </Text>
    </Paragraph>
  )
}

export default MoreInfoString

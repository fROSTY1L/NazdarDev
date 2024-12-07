import { ProjectContent, ProjectPic, ProjectText, ProjectTitle, ProjectWrap } from "../../styles/Projects/Projects.style"
import { Colors } from "../../variables/Colors"

interface ProjectProps {
    picUrl: string,
    title: string,
    text: string,
    isPicLeft: boolean,
    colors: Colors
}

const Project = (props: ProjectProps) => {
    
  return (
    <ProjectWrap colors={props.colors} isPicLeft={props.isPicLeft}>
      <ProjectPic src={props.picUrl}/>
      <ProjectText>
        <ProjectTitle>{props.title}</ProjectTitle>
        <ProjectContent>{props.text}</ProjectContent>
      </ProjectText>
    </ProjectWrap>
  )
}

export default Project

import { Content, Title, Wrap } from "../styles/Projects/Projects.style"
import background from "../assets/Projects/background.png"
import Project from "../components/Projects/Project"
import firstProjectPic from "../assets/Projects/Project1.png"
import secondProjectPic from "../assets/Projects/Project2.jpg" 
import { useColors } from "../variables/Colors"
import { useTranslation } from "react-i18next"

const Projects = () => {
    const colors = useColors()
    const { t } = useTranslation()
  return (
    <Wrap url={background} id="projects">
      <Title>
        {t('Projects.mainTitle')}
        </Title>   
      <Content>
        <Project colors={colors} isPicLeft={true} picUrl={secondProjectPic} title={t('Projects.titles.commerce')} text={t('Projects.content.commerce')}/>
        <Project colors={colors} isPicLeft={false} picUrl={firstProjectPic} title={t('Projects.titles.openCode')} text={t('Projects.content.openCode')}/>
        
      </Content>
      </Wrap>
  )
}

export default Projects

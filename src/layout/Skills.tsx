import { Container } from '../styles/Skills/Skills.style'
import { useColors } from '../variables/Colors'
import background from '../assets/Skills/background.png'
import ts from '../assets/Skills/icons/frontend/typescript.png'
import js from '../assets/Skills/icons/frontend/javascript.png'
import redux from '../assets/Skills/icons/frontend/redux.png'
import react from '../assets/Skills/icons/frontend/react.png'
import figma from '../assets/Skills/icons/design/figma.png'
import ps from '../assets/Skills/icons/design/photoshop 1.png'
import node from '../assets/Skills/icons/backend/node.png'
import docker from '../assets/Skills/icons/backend/docker.png'
import postgres from '../assets/Skills/icons/backend/postgresql.png'
import Skill from '../components/Skills/Skill'
import i18n from '../i18n'

const Skills = () => {
  const { t } = i18n

  const colors = useColors()

  const frontendList = [react, js, ts, redux] 
  const designList = [ps, figma]
  const backendList = [node, docker, postgres]

  return (
    <Container colors={colors} url={background} id='skills'>
      <Skill title={t('Skills.titles.front')} techList={frontendList}/>
      <Skill title={t('Skills.titles.design')} techList={designList}/>
      <Skill title={t('Skills.titles.back')} techList={backendList}/>
    </Container>
  )
}

export default Skills

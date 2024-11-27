import { Container, SkillsContainer, Title } from '../styles/Skills/Skills.style'
import { useColors } from '../variables/Colors'
import background from '../assets/Skills/background.png'
import ts from '../assets/Skills/icons/frontend/typescript.png'
import js from '../assets/Skills/icons/frontend/javascript.png'
import redux from '../assets/Skills/icons/frontend/redux.png'
import react from '../assets/Skills/icons/frontend/react.png'
import styledComponents from '../assets/Skills/icons/frontend/styled-components.png'
import tailwindCSS from '../assets/Skills/icons/frontend/Tailwind CSS.png'
import antd from '../assets/Skills/icons/frontend/Ant Design.png'
import figma from '../assets/Skills/icons/design/figma.png'
import ps from '../assets/Skills/icons/design/photoshop.png'
import node from '../assets/Skills/icons/backend/node.png'
import docker from '../assets/Skills/icons/backend/docker.png'
import postgres from '../assets/Skills/icons/backend/postgresql.png'
import express from '../assets/Skills/icons/backend/Express JS.png'
import git from '../assets/Skills/icons/design/Git.png'
import Skill from '../components/Skills/Skill'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()

  const colors = useColors()

  const frontendList = {
    techUrl: [react, js, ts, redux, tailwindCSS, styledComponents, antd],
    techNames: ['React', 'JavaScript', 'TypeScript', 'Redux', 'Tailwind CSS', 'styled-components', 'Ant Design']
  }
  const otherList = {
    techUrl: [ps, figma, docker, git],
    techNames: ['Photoshop', 'Figma',  'Docker', 'Git']
  }
  const backendList = {
    techUrl: [node, express, postgres],
    techNames: ['Node.js', 'Express JS', 'Postgresql']
  }

  return (
    <Container colors={colors} url={background} id='skills'>
      <Title>{t('Skills.titles.main')}</Title>
      <SkillsContainer>
        <Skill title={t('Skills.titles.front')} techList={frontendList.techUrl} techNames={frontendList.techNames}/>
        <Skill title={t('Skills.titles.back')} techList={backendList.techUrl} techNames={backendList.techNames}/>
        <Skill title={t('Skills.titles.other')} techList={otherList.techUrl} techNames={otherList.techNames}/>
      </SkillsContainer>
    </Container>
  )
}

export default Skills

import { Description, Divider, OpenDescription, SkillTitle, SkillWrap, TechIcon, TechList, TechText, TechWrap } from "../../styles/Skills/Skills.style"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSkillState } from "../../store/skillReducer";
import { useColors } from "../../variables/Colors";

interface SkillProps {
    title: string,
    techList: string[],
    techNames: string[]
}

const Skill = (props: SkillProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const currentSkill = useSelector((state: RootState) => state.skill.isOpen)



  const dispatch = useDispatch()

  const colors = useColors()

  const handleClick = () => {
    if (currentSkill != props.title)
        dispatch(setSkillState(props.title))
    else
        dispatch(setSkillState(null));

  };

  const openIcon = `src/assets/Skills/openIcon/${theme}/icon.png`
  
  return (
    <>    
    <SkillWrap>
      <SkillTitle onClick={handleClick}>
        {props.title}
      </SkillTitle>
      <OpenDescription onClick={handleClick} isOpen={currentSkill == props.title} src={openIcon}/>
      
    </SkillWrap>
    
    {currentSkill == props.title && 
        <Description>
          <TechList>
            { !props.techList ? <></> : props.techList.map((tech: string) => <TechWrap id={props.techNames[props.techList.indexOf(tech)]} colors={colors}><TechText isVisible="block">{props.techNames[props.techList.indexOf(tech)]}</TechText><TechIcon src={tech} /></TechWrap>) } 
            </TechList>  
        </Description>
        }
      
    <Divider colors={colors}/>
    </>

  )
}

export default Skill

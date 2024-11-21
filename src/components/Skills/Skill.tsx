import { Description, Divider, SkillTitle, SkillWrap, TechIcon, TechList, TechText, TechWrap } from "../../styles/Skills/Skills.style"
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
  const currentSkill = useSelector((state: RootState) => state.skill.isOpen)

  const dispatch = useDispatch()

  const colors = useColors()

  const handleClick = () => {
    if (currentSkill != props.title)
        dispatch(setSkillState(props.title))
    else
        dispatch(setSkillState(null));

  };

  
  return (
    <>    
    <SkillWrap>
      <SkillTitle onClick={handleClick}>
        {props.title}
      </SkillTitle>
    </SkillWrap>
        <Description>
          <TechList>
            { !props.techList ? <></> : props.techList.map((tech: string) => <TechWrap id={props.techNames[props.techList.indexOf(tech)]} colors={colors}><TechText isVisible="block">{props.techNames[props.techList.indexOf(tech)]}</TechText><TechIcon src={tech} /></TechWrap>) } 
            </TechList>  
        </Description>
        
      
    <Divider colors={colors}/>
    </>

  )
}

export default Skill

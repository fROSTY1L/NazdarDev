import { Description, Divider, SkillTitle, SkillWrap, TechIcon, TechList } from "../../styles/Skills/Skills.style"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setSkillState } from "../../store/skillReducer";

interface SkillProps {
    title: string,
    techList: string[],

}

const Skill = (props: SkillProps) => {
  const currentSkill = useSelector((state: RootState) => state.skill.isOpen)
  const dispatch = useDispatch()

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
      <TechList>
        {currentSkill != props.title && !props.techList ? <></> : props.techList.map((tech: string) => <TechIcon src={tech}/>) }
      </TechList>
      
    </SkillWrap>
    {currentSkill == props.title && 
        <Description>
            { !props.techList ? <></> : props.techList.map((tech: string) => <TechIcon src={tech}/>) }   
        </Description>
        }
    <Divider/>
    </>

  )
}

export default Skill

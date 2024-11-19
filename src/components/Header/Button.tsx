import { useDispatch } from "react-redux";
import { ButtonWrap } from "../../styles/Header/Button.style"
import { useColors } from "../../variables/Colors"
import { setActiveButtonState } from "../../store/activeButtonReducer";


interface ButtonProps {
    text: string,
    isActive: boolean,
    section: 'home' | 'skills' | 'about' | 'projects'
}

const Button = (props: ButtonProps) => {
    const colors = useColors()
    const dispatch = useDispatch();
    
    const scrollToSection = () => {
      dispatch(setActiveButtonState(props.section))
      const section = document.getElementById(props.section);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <ButtonWrap onClick={scrollToSection}
      isActive={props.isActive} 
      colors={colors}>
        {props.text}
    </ButtonWrap>
  )
}

export default Button

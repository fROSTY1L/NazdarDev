import { useTranslation } from "react-i18next"
import Button from "../components/Header/Button"
import { Container } from "../styles/Header/Header.style"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { setActiveButtonState } from "../store/activeButtonReducer"

const Header = () => {
  const { t } = useTranslation()
  

  const activeButton = useSelector((state: RootState) => state.activeButton.activeButton)
  const dispatch = useDispatch()
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        currentSection = section.id;
      }
    });
    currentSection != '' && dispatch(setActiveButtonState(currentSection));
      
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <>
    <Container >
      <Button text={t('Header.buttons.home')} isActive={activeButton === 'home'} section='home'/>
      <Button text={t('Header.buttons.skills')} isActive={activeButton === 'skills'} section='skills'/>
      <Button text={t('Header.buttons.projects')} isActive={activeButton === 'projects'} section='projects'/>
    </Container>
    </>
  )
}

export default Header

import { AboutMeInfo, AboutMeInfoTitle, AdditionalButtons, Button, ButtonWrap } from "../../styles/AboutMe.style"
import { useColors } from "../../variables/Colors"
import vk from '../../assets/AboutMe/buttons/vk.png'
import discord from '../../assets/AboutMe/buttons/discord.png'
import telegram from '../../assets/AboutMe/buttons/telegram.png'
import github from '../../assets/AboutMe/buttons/github.png'
import { useTranslation } from "react-i18next"


const Socials = () => {
  const colors = useColors()

  const { t } = useTranslation()
  return (
    <AboutMeInfo>
        <AboutMeInfoTitle colors={colors}>
          {t('AboutMe.titles.social')}
        </AboutMeInfoTitle>
        <AdditionalButtons>
          <ButtonWrap bgColor={colors.buttons.vk} hoveredColor={colors.buttons.hovered.vk}>
              <Button src={vk}/>  
          </ButtonWrap>
          <ButtonWrap bgColor={colors.buttons.github} hoveredColor={colors.buttons.hovered.github}>
              <Button src={github}/>  
          </ButtonWrap>
          <ButtonWrap bgColor={colors.buttons.telegram} hoveredColor={colors.buttons.hovered.telegram}>
              <Button src={telegram}/>  
          </ButtonWrap>
          <ButtonWrap bgColor={colors.buttons.discord} hoveredColor={colors.buttons.hovered.discord}>
              <Button src={discord}/>  
          </ButtonWrap>
        </AdditionalButtons>
    </AboutMeInfo>
  )
}

export default Socials

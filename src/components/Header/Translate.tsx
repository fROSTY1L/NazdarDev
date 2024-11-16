import ru from '../../assets/Header/translate/ru.jpg'
import en from '../../assets/Header/translate/en.jpg'
import { Container, Icon, IconWrap, Title } from '../../styles/Header/Translate.style'
import { useTranslation } from 'react-i18next';
import { useColors } from '../../variables/Colors';

const Translate = () => {
    const { t, i18n } = useTranslation();
    const colors = useColors()
    
    const currentLanguage = i18n.language;

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
      };

  return (
    <Container onClick={() => {
        currentLanguage == 'ru' ? changeLanguage('en') : changeLanguage('ru')}
        }>
      <Title>{t('Header.settings.translate')}</Title>
      <IconWrap colors={colors}>
        <Icon src={currentLanguage == 'ru' ? en : ru}/>
      </IconWrap>
    </Container>
  )
}

export default Translate

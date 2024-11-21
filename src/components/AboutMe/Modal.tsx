import React from 'react';
import { ContactIcon, ContactIconWrap, ContactText, Title, ContactWrap, ModalBackground, ModalContainer, ContactTitle, ContactContainer, RightColumn } from '../../styles/Modal.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setModalState } from '../../store/modalReducer';
import { useColors } from '../../variables/Colors';
import phone from '../../assets/AboutMe/buttons/phone-call.png'
import telegram from '../../assets/AboutMe/buttons/telegram.png'
import vk from '../../assets/AboutMe/buttons/vk.png'
import mail from '../../assets/AboutMe/buttons/email.png'
import { useTranslation } from 'react-i18next';
import CopyebleText from '../CopyebleText';



const Modal: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen)
    const dispatch = useDispatch()

    const { t } = useTranslation()
    const colors = useColors()
    return (
        <ModalBackground onClick={() => dispatch(setModalState(false))}>
            <ModalContainer colors={colors} isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <Title>{t('Modal.title')}</Title>
                <>
                    <ContactContainer>
                    <ContactTitle colors={colors}>telegram</ContactTitle>
                    <ContactWrap colors={colors}>
                        <ContactText colors={colors}><a href='https://t.me/nazdarq' target='_blank'>https://t.me/nazdarq</a></ContactText>
                        <RightColumn>
                        <CopyebleText text='https://t.me/nazdarq'/>
                        <ContactIconWrap hex={colors.buttons.telegram}>
                            <ContactIcon src={telegram}/>
                        </ContactIconWrap>
                        </RightColumn>
                    </ContactWrap>
                    </ContactContainer>
                    <ContactContainer>
                    <ContactTitle colors={colors}>vk</ContactTitle>
                    <ContactWrap colors={colors}>
                        <ContactText colors={colors}><a href='https://vk.com/nazdar1l' target='_blank'>https://vk.com/nazdar1l</a></ContactText>
                        <RightColumn>
                        <CopyebleText text='https://vk.com/nazdar1l'/>
                        <ContactIconWrap hex={colors.buttons.vk}>
                            <ContactIcon src={vk}/>
                        </ContactIconWrap>
                        </RightColumn>
                    </ContactWrap>
                    </ContactContainer>
                    <ContactContainer>
                    <ContactTitle colors={colors}>mail</ContactTitle>
                    <ContactWrap colors={colors}>
                        <ContactText colors={colors}><a>n.bolloev@mail.ru</a></ContactText>
                        <RightColumn>
                        <CopyebleText text='n.bolloev@mail.ru'/>
                        <ContactIconWrap hex='#800000'>
                            <ContactIcon src={mail}/>
                        </ContactIconWrap>
                        </RightColumn>
                    </ContactWrap>
                    </ContactContainer>
                    <ContactContainer>
                    <ContactTitle colors={colors}>phone number</ContactTitle>
                    <ContactWrap colors={colors}>
                        <ContactText colors={colors}>+7(909)487-93-33</ContactText>
                        <RightColumn>
                        <CopyebleText text='+7(909)487-93-33'/>
                        <ContactIconWrap hex='#008000'>
                            <ContactIcon src={phone}/>
                        </ContactIconWrap>
                        </RightColumn>
                    </ContactWrap>
                    </ContactContainer>
                    
                </>
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
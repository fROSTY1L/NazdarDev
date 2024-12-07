import React from 'react';
import {  ContactBarText, ContactBarWrap, ModalBackground, ModalContainer, ModalInstruction } from '../../styles/Modal.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setModalState } from '../../store/modalReducer';
import { useColors } from '../../variables/Colors';
import phone from '../../assets/AboutMe/buttons/phone-call.png'
import telegram from '../../assets/AboutMe/buttons/telegram.png'
import vk from '../../assets/AboutMe/buttons/vk.png'
import mail from '../../assets/AboutMe/buttons/email.png'
import { useTranslation } from 'react-i18next';
import ContactBarItem from './ContentBarItem';


const Modal: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen)
    const dispatch = useDispatch()

    const { t } = useTranslation();


    const colors = useColors()

    return (
        <ModalBackground onClick={() => dispatch(setModalState(false))}>
            <ModalInstruction colors={colors}>{t('Modal.instruction')}</ModalInstruction>
            <ModalContainer isMoreInfo={false} colors={colors} isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <ContactBarWrap>
                    <ContactBarText colors={colors}>
                        <p>https://t.me/nazdarq</p> 
                    </ContactBarText>
                    <ContactBarItem 
                        url='https://t.me/nazdarq' 
                        icon={telegram} 
                        bgColor={colors.buttons.telegram} 
                        hoveredColor={colors.buttons.hovered.telegram} 
                    />
                </ContactBarWrap>
                <ContactBarWrap>
                    <ContactBarText colors={colors}>
                        <p>https://vk.com/nazdar1l</p>
                    </ContactBarText>
                    <ContactBarItem 
                        url='https://vk.com/nazdar1l' 
                        icon={vk}
                        bgColor={colors.buttons.vk} 
                        hoveredColor={colors.buttons.hovered.vk} 
                    />
                </ContactBarWrap>
                <ContactBarWrap>
                    <ContactBarText colors={colors}>
                        <p>n.bolloev@mail.ru</p>
                    </ContactBarText>
                    <ContactBarItem 
                        url='mailto:n.bolloev@mail.ru?subject=Совместная работа' 
                        icon={mail}
                        bgColor={colors.buttons.telegram} 
                        hoveredColor={colors.buttons.hovered.telegram} 
                    />
                </ContactBarWrap>
                <ContactBarWrap>
                    <ContactBarText colors={colors}>
                        <p>+7(909)-487-93-33</p>
                    </ContactBarText>
                    <ContactBarItem 
                        url='tel:+79094879333' 
                        icon={phone}
                        bgColor={colors.buttons.vk} 
                        hoveredColor={colors.buttons.hovered.vk} 
                    />
                </ContactBarWrap>
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
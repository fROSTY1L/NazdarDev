import React, { useRef } from 'react';
import { ContactBar, ContactBarText, ContactBarWrap, ContactIcon, ModalBackground, ModalContainer } from '../../styles/Modal.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setModalState } from '../../store/modalReducer';
import { useColors } from '../../variables/Colors';
import phone from '../../assets/AboutMe/buttons/phone-call.png'
import telegram from '../../assets/AboutMe/buttons/telegram.png'
import vk from '../../assets/AboutMe/buttons/vk.png'
import mail from '../../assets/AboutMe/buttons/email.png'





const Modal: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen)
    const dispatch = useDispatch()

    const handleClick = (url: string) => {
        window.open(url, '_blank'); 
    };

    const colors = useColors()

    return (
        <ModalBackground onClick={() => dispatch(setModalState(false))}>
            <ModalContainer colors={colors} isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <ContactBarWrap>
                    <ContactBarText colors={colors}>
                        <p>https://t.me/nazdarq</p>
                        <p>| @nazdarq</p>
                    </ContactBarText>
                    <ContactBar bgColor={colors.buttons.telegram} onClick={() => handleClick('https://t.me/nazdarq')}>
                        <ContactIcon src={telegram}/>
                    </ContactBar>
                </ContactBarWrap>
                <ContactBarWrap>
                    <ContactBarText colors={colors}>
                        <p>https://vk.com/nazdar1l</p>
                        <p>| Nazdar Bolloev</p>  
                    </ContactBarText>
                <ContactBar bgColor={colors.buttons.vk} onClick={() => handleClick('https://vk.com/nazdar1l')}>
                    <ContactIcon src={vk}/>
                </ContactBar>
                </ContactBarWrap>
                <ContactBarWrap>
                    <ContactBarText colors={colors}>
                        <p>n.bolloev@mail.ru</p>
                    </ContactBarText>
                    <ContactBar bgColor={colors.buttons.telegram}>
                        <ContactIcon src={mail}/>
                    </ContactBar>
                </ContactBarWrap>
                <ContactBarWrap>
                    <ContactBarText colors={colors}>
                        <p>+7(909)-487-93-33</p>
                    </ContactBarText>
                <ContactBar bgColor={colors.buttons.vk}>
                    <ContactIcon src={phone}/>
                </ContactBar>
                </ContactBarWrap>
                
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
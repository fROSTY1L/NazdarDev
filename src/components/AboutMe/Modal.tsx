import React from 'react';
import { ModalBackground, ModalContainer } from '../../styles/AboutMe.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setModalState } from '../../store/modalReducer';

const Modal: React.FC = () => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen)
    const dispatch = useDispatch()

    return (
        <ModalBackground onClick={() => dispatch(setModalState(false))}>
            <ModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                
            </ModalContainer>
        </ModalBackground>
    );
};

export default Modal;
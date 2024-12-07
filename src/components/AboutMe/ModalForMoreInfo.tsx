import { useDispatch, useSelector } from "react-redux"
import { ModalBackground, ModalContainer, MoreContainer } from "../../styles/Modal.style"
import { useColors } from "../../variables/Colors"
import { RootState } from "../../store"
import { setMoreInfo } from "../../store/modalReducer"
import MoreInfoString from "./MoreInfoString"
import { useTranslation } from "react-i18next"

const ModalForMoreInfo = () => {
    const colors = useColors()
    const isOpenMoreInfo = useSelector((state: RootState) => state.modal.isMoreInfo)
    const dispatch = useDispatch()
    const { t } = useTranslation()
    
    return (
        <ModalBackground onClick={() => dispatch(setMoreInfo(false))}>
            <ModalContainer 
                isMoreInfo={true} 
                isOpen={isOpenMoreInfo} 
                colors={colors} 
                onClick={(e) => e.stopPropagation()} 
            >
                <MoreContainer colors={colors}>
                    <MoreInfoString title={t('MoreInfo.titles.aboutMe')} text={t('MoreInfo.content.aboutMe')}/>
                    <MoreInfoString title={t('MoreInfo.titles.command')} text={t('MoreInfo.content.command')}/>
                    <MoreInfoString title={t('MoreInfo.titles.skills')} text={t('MoreInfo.content.skills')}/>
                    <MoreInfoString title={t('MoreInfo.titles.backend')} text={t('MoreInfo.content.backend')}/>
                    <MoreInfoString title={t('MoreInfo.titles.mobile')} text={t('MoreInfo.content.mobile')}/>
                    <MoreInfoString title={t('MoreInfo.titles.end')} text={t('MoreInfo.content.end')}/>
                </MoreContainer>
            </ModalContainer>
        </ModalBackground>
    )
}

export default ModalForMoreInfo

import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
    isOpen: boolean;
    isMoreInfo: boolean;
}

const initialState: ModalState = {
    isOpen: false,
    isMoreInfo: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalState: (state, action) => {
            state.isOpen = action.payload;
            
        },
        setMoreInfo: (state, action) => {
            state.isMoreInfo = action.payload
        }
    },
})

export const { setModalState, setMoreInfo } = modalSlice.actions;
export default modalSlice.reducer

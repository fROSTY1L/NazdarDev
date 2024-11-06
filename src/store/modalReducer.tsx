import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalState: (state, action) => {
            state.isOpen = action.payload
        },
    },
})

export const { setModalState } = modalSlice.actions;
export default modalSlice.reducer

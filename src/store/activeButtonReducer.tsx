import { createSlice } from "@reduxjs/toolkit"

interface ModalState {
    activeButton: 'home' | 'skills' | 'about' | 'projects';
}

const initialState: ModalState = {
     activeButton: 'home'
}

const activeButtonSlice = createSlice({
    name: 'activeButton',
    initialState,
    reducers: {
        setActiveButtonState: (state, action) => {
            state.activeButton = action.payload
        },
    },
})

export const { setActiveButtonState } = activeButtonSlice.actions;
export default activeButtonSlice.reducer

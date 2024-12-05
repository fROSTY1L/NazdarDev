import { createSlice } from "@reduxjs/toolkit"

interface MenuState {
    isOpen: boolean;
}

const initialState: MenuState = {
    isOpen: false
}

const MenuSlice = createSlice({
    name: 'menuState',
    initialState,
    reducers: {
        setMenuState: (state, action) => {
            state.isOpen = action.payload
        },
    },
})

export const { setMenuState } = MenuSlice.actions;
export default MenuSlice.reducer

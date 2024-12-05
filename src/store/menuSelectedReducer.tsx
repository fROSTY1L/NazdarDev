import { createSlice } from "@reduxjs/toolkit"

interface MenuSelectedState {
    selected: number | null
}

const initialState: MenuSelectedState = {
    selected: null
}

const MenuSelectedSlice = createSlice({
    name: 'menuSelectedState',
    initialState,
    reducers: {
        setMenuSelectedState: (state, action) => {
            state.selected = action.payload
        },
    },
})

export const { setMenuSelectedState } = MenuSelectedSlice.actions;
export default MenuSelectedSlice.reducer

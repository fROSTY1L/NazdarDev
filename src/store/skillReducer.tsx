import { createSlice } from "@reduxjs/toolkit"

interface SkillState {
    isOpen: 'Frontend' | 'Design' | 'Backend' | null;
}

const initialState: SkillState = {
    isOpen: null
}

const skillSlice = createSlice({
    name: 'skill',
    initialState,
    reducers: {
        setSkillState: (state, action) => {
            state.isOpen = action.payload
        },
    },
})

export const { setSkillState } = skillSlice.actions;
export default skillSlice.reducer

import { configureStore, createSlice } from '@reduxjs/toolkit'
let teamName = createSlice({
    name: 'teamName',
    initialState: {
        name: 'WEB'
    },
    reducers: {
        changeName: (state, action) => {
            console.log(action.payload);
            state.name = action.payload;
        }
    }

})
export const {changeName} = teamName.actions;
export default configureStore({
    reducer: {
        teamName: teamName.reducer
    }
})
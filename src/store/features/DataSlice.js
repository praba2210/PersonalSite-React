import { createSlice } from '@reduxjs/toolkit';


const initialState = {
UserName:'',
UserEmail:'',
}

export const DataSlice = createSlice({
    name: 'Data',
    initialState,
    reducers: {
        setUserName(state, action) {
            state.UserName = action.payload;
        },
        setUserEmail(state, action) {
            state.UserEmail = action.payload;
        }
    }
});

export const {setUserEmail, setUserName} = DataSlice.actions;
export default DataSlice.reducer;
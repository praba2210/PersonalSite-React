import { createSlice } from '@reduxjs/toolkit';

const initialState = {
BookmarkList:'',
BookmarkDetails:'',
}

export const BookmarkSlice = createSlice({
    name: 'Bookmark',
    initialState,
    reducers: {
        setBookmarkList(state, action) {
            state.UserName = action.payload;
        },
        setBookmarkDetails(state, action) {
            state.UserEmail = action.payload;
        }
    }
});

export const {setBookmarkList, setBookmarkDetails} = BookmarkSlice.actions;
export default BookmarkSlice.reducer;
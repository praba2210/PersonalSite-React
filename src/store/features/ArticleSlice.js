import { createSlice } from '@reduxjs/toolkit';

const initialState = {
ArticleList:'',
ArticleDetails:'',
}

export const ArticleSlice = createSlice({
    name: 'Article',
    initialState,
    reducers: {
        setArticleList(state, action) {
            state.UserName = action.payload;
        },
        setArticleDetails(state, action) {
            state.UserEmail = action.payload;
        }
    }
});

export const {setArticleList, setArticleDetails} = ArticleSlice.actions;
export default ArticleSlice.reducer;
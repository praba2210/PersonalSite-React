import { configureStore } from '@reduxjs/toolkit';
import DataSlice from './features/DataSlice';
import BookmarkSlice from './features/BootmarkSlice';
import ArticleSlice from './features/ArticleSlice';

export const store = configureStore({
  reducer: {
    Data: DataSlice,
    Bookmark: BookmarkSlice,
    Article: ArticleSlice
  },
});
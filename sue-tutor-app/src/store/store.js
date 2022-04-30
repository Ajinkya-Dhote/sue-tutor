import { configureStore } from '@reduxjs/toolkit';
import modeSlice from './features/modeSlice';
import themeSlice from './features/themeSlice';

export default configureStore({
  reducer: {
      mode: modeSlice,
      theme: themeSlice
  }
})
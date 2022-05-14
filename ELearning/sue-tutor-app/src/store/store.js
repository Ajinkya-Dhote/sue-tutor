import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './features/customerSlice';
import modeSlice from './features/modeSlice';
import themeSlice from './features/themeSlice';

export default configureStore({
  reducer: {
      mode: modeSlice,
      theme: themeSlice,
      customer: customerSlice
  }
})
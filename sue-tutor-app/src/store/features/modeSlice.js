import { createSlice } from '@reduxjs/toolkit'

export const modeSlice = createSlice({
    name: 'mode',
    initialState: {
      value: 'light'
    },
    reducers: {
      light: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = 'light'
      },
      dark: state => {
        state.value = 'dark'
      },
      toggle: state => {
        state.value = state.value === 'light' ? 'dark' : 'light';
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { light, dark, toggle } = modeSlice.actions
  
  export default modeSlice.reducer
import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from '@mui/material/colors';
import { createSlice } from '@reduxjs/toolkit'

let themes = [];
[
    {color: '#26a59a', name: 'custom-teal'},
    {color: red[500], name: 'red'},
    {color: pink[500], name: 'pink'},
    {color: purple[500], name: 'purple'},
    {color: deepPurple[500], name: 'deepPurple'},
    {color: indigo[500], name: 'indigo'},
    {color: blue[500], name: 'blue'},
    {color: lightBlue[500], name: 'lightBlue'},
    {color: cyan[500], name: 'cyan'},
    {color: teal[500], name: 'teal'},
    {color: green[500], name: 'green'},
    {color: lightGreen[500], name: 'lightGreen'},
    {color: lime[500], name: 'lime'},
    {color: yellow[500], name: 'yellow'},
    {color: amber[500], name: 'amber'},
    {color: orange[500], name: 'orange'},
    {color: deepOrange[500], name: 'deepOrange'},
    {color: brown[500], name: 'brown'},
    {color: grey[500], name: 'grey'},
    {color: blueGrey[500], name: 'blueGrey'}
].forEach(theme => themes.push({
    theme: {
        palette: {
        mode: 'light',
        primary: {main: theme.color}
      }
    },
    name: theme.name,
    color: theme.color

}))


export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      currentTheme: themes[0],
      mode: 'light',
      themes: themes
    },
    reducers: {
      setTheme: (state, theme) => {
          state.currentTheme = theme
      },
      toggleMode: (state, mode) => {
          state.mode =  state.mode==='light' ? 'dark': 'light';
          let tempTheme = state.currentTheme?.payload ? state.currentTheme.payload.theme : state.currentTheme.theme;
          tempTheme.palette.mode = state.mode;
          state.currentTheme.theme = tempTheme;
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { setTheme, toggleMode } = themeSlice.actions;
  
  export default themeSlice.reducer;



import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import Header from './components/Header/Header';
import About from './components/About/About';

// import store from './app/store'
import { useSelector } from 'react-redux'
import { zhCN } from '@mui/material/locale';
import SettingsHome from './components/Settings/SettingsHome';
import { Box, Container, CssBaseline, Grid } from '@mui/material';

// import { createTheme } from '@mui/material/styles';





export default function App() {
  const selectedtheme = useSelector(state => state.theme.currentTheme);
  const theme = createTheme(selectedtheme?.payload ? selectedtheme?.payload.theme : selectedtheme.theme)

  return (
      <ThemeProvider theme={theme}>    
        <CssBaseline />
        <div className="app">
          <Header />
          <Outlet />
        </div>
        
      </ThemeProvider>
  );
}


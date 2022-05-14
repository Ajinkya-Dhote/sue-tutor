import React from 'react';
import './App.css';
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header/Header';

import { useSelector } from 'react-redux'
import {CssBaseline } from '@mui/material';


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


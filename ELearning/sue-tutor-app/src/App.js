import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import './App.css';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import Header from './components/Header/Header';



export default function App() {
  const selectedtheme = useSelector(state => state.theme.currentTheme);
  const theme = createTheme(selectedtheme?.payload ? selectedtheme?.payload.theme : selectedtheme.theme)

  return (
      <ThemeProvider theme={theme}>    
        <CssBaseline />
        <div className="app">
          <Header />
          <Outlet />
          <BottomNavBar />
        </div>
        
      </ThemeProvider>
  );
}


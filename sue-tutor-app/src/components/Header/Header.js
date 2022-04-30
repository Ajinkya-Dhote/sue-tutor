import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

import SettingsMenu from '../Settings/SettingsMenu';
import SettingsHome from '../Settings/SettingsHome';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, styled, TextField } from '@mui/material';

function Header() {
  const { t, i18n } = useTranslation();
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
    '& .MuiInput-input': {
      '& .MuiInputBase-input': {
        color: '#fff',
        borderBottomColor: '#fff',
      },
      },
      '& .MuiInputLabel-root': {
        color: '#fff',
        borderBottomColor: '#fff',
      }
  });

    return (
        <Box sx={{ flexGrow: 1 }} className="header">
        <AppBar position="static" sx={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, pb: 1}}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              {/* {t('welcome')} */}
              Hi, User
            </Typography>
            <IconButton >
                <NotificationsIcon sx={{ color: '#fff' }}/>
            </IconButton>
            {/* <Button onClick={()=> i18n.changeLanguage('en')} color="inherit">{t('login')}</Button> */}
           
            {/* <SettingsMenu/> */}
          </Toolbar>
          <Toolbar>
              <CssTextField fullWidth id="input-with-sx" label="search" variant="outlined" sx={{ input: { color: '#fff' }}} InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: '#fff', mr: 1, my: 0.5 }}/>
                          </InputAdornment>
                        ),
                      }} size="small"
              />
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Header;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';

import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { InputAdornment, Link, styled, TextField } from '@mui/material';
import { useSelector } from 'react-redux'

function Header() {
  const name = useSelector(state => state.customer.info)
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
        <Box className="header">
        <AppBar position="static" sx={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, pb: 1}}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              {t('welcome')} {name.name}
              {/* Hi, User */}
            </Typography>
            <Link to="/"

          >
            <HomeIcon sx={{ color: '#fff' }}/>
          </Link>
            {/* <IconButton onClick={() => navigate()}>
                <HomeIcon sx={{ color: '#fff' }}/>
            </IconButton> */}
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
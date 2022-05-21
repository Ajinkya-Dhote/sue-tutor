import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, styled, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../services/auth/RequireAuth';


function Header() {
  const name = useSelector(state => state.customer.info)
  const { t, i18n } = useTranslation();
  let auth = useAuth();
  let navigate = useNavigate();
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

  const handelLogout = (event) => {
    auth.signout(() => {
      localStorage.clear();
      navigate("/login")
    })
  }

  return (
    <Box className="header">
      <AppBar position="static" sx={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15, pb: 1 }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {t('welcome')} {name.name}
          </Typography>

          {/* <Link to="/">
            <HomeIcon sx={{ color: '#fff' }} />
          </Link> */}

          <IconButton >
            <NotificationsIcon sx={{ color: '#fff' }} />
          </IconButton>
          
         { auth.user && <IconButton onClick={handelLogout}>
            <LogoutIcon sx={{ color: '#fff' }} />
          </IconButton>}
        </Toolbar>
        <Toolbar>
          <CssTextField fullWidth id="input-with-sx" label="search" variant="outlined" sx={{ input: { color: '#fff' } }} InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#fff', mr: 1, my: 0.5 }} />
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
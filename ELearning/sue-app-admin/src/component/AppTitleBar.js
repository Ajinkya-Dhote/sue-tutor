import { IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';

import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { TitleBarService } from "../services/TitleBarService";
import { useState } from "react";
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

export function AppTitleBar(props) {
    let {open, handleDrawerOpen, handelLogout} = props;
    const [title, setTitle] = useState('');

    TitleBarService.getTitle().subscribe(t => {
        setTitle(t.title);
    });


    return (
        <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"  sx={{ flexGrow: 1 }}>
            {title}
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handelLogout}
            // edge="end"
        
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}
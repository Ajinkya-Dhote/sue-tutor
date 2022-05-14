import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import * as React from 'react';

export default function SettingsHome() {

    let navigate = useNavigate();

    
    const checkCurrentActiveRoute = (menues, location) => {
        return menues.findIndex(menu => menu.path === location.pathname) || 0

    };

    const menues = [
        {
            name: 'Profile',
            icon: <PersonIcon />,
            path: '/settings',
            route: ''
        },
        {
            name: 'Settings',
            icon: <SettingsIcon />,
            path: '/settings/app-settings',
            route: 'app-settings'
        }
    ]

    let location = useLocation();
    const [value, setValue] = React.useState(checkCurrentActiveRoute(menues, location));

    return (
        <>
        <Outlet />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation  color="primary"
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        {menues.map(menu => (
                            <BottomNavigationAction key={menu.name} label={menu.name} icon={menu.icon} onClick={() => navigate(menu.route)}/>
                        ))}
                    </BottomNavigation>
                </Paper>
        </>
        
    )
}
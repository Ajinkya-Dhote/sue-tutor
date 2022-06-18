import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/MenuBook';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BottomNavBar() {
    let navigate = useNavigate();
    const [value, setValue] = useState(0);

    const menues = [
        {
            name: 'Home',
            icon: <HomeIcon />,
            path: '/home',
            route: ''
        },
        {
            name: 'Schedule',
            icon: <ScheduleIcon />,
            path: '/about',
            route: '/about'
        },
        {
            name: 'Courses',
            icon: <BookIcon />,
            path: '/courses',
            route: '/courses'
        },
        {
            name: 'Payments',
            icon: <CurrencyRupeeIcon />,
            path: '/about',
            route: '/about'
        },
        {
            name: 'Settings',
            icon: <SettingsIcon />,
            path: '/settings',
            route: '/settings'
        }
    ]


    return (
        <>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >

                    {menues.map(menu => (
                        <BottomNavigationAction key={menu.name} label={menu.name} icon={menu.icon} onClick={() => navigate(menu.route)} />
                    ))}
                    {/* <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Schedule" icon={<ScheduleIcon />} />
                    <BottomNavigationAction label="Homework" icon={<BookIcon />} />
                    <BottomNavigationAction label="Payments" icon={<CurrencyRupeeIcon />} />
                    <BottomNavigationAction label="Settings" icon={<SettingsIcon />} /> */}

                </BottomNavigation>
            </Paper>
        </>
    )
}

export default BottomNavBar;
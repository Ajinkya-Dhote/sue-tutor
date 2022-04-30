import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux'
import { toggle } from '../../store/features/modeSlice';

export default function SettingsMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                //   onClick={() => dispatch(toggle())}
                    color="secondary"
                >
                    <MoreVertIcon />
                    
                </IconButton>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{'aria-labelledby': 'basic-button',
                }}>
                        <MenuItem onClick={props.onClose}>Profile</MenuItem>
                        <MenuItem onClick={props.onClose}> <DarkMode /></MenuItem>
                        <MenuItem onClick={props.onClose}>Logout</MenuItem>
                    </Menu>
        </div>
        
    );
}

function DarkMode() {
    const dispatch = useDispatch();

    return (
        <IconButton
            onClick={() => dispatch(toggle())}
        >
            <DarkModeIcon />
        </IconButton>
    );
}

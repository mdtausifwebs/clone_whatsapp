import { Box, Menu, MenuItem } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const HeaderManu = ({ setopen }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <MoreVertIcon
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <MenuItem onClick={() => { handleClose(); setopen(true); }}>New group</MenuItem>
                <MenuItem onClick={() => { handleClose(); setopen(true); }}>Profile</MenuItem>
                <MenuItem onClick={() => { handleClose(); setopen(true); }}>My account</MenuItem>
                <MenuItem onClick={() => { handleClose(); setopen(true); }}>Settings</MenuItem>
                <MenuItem onClick={() => { handleClose(); setopen(true); }}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}

export default HeaderManu
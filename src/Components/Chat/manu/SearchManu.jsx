import React from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled, MenuItem, Menu, Box, Typography } from '@mui/material'
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SmsFailedIcon from '@mui/icons-material/SmsFailed';
import Groups2Icon from '@mui/icons-material/Groups2';

const ChatFilter = styled(FilterListIcon)`
padding:5px 15px ;
`

const DilogMenu=styled(Menu)`
width:100%;
dispaly:flex;
`
const Menuitems=styled(MenuItem)`
dispaly:flex;
gap:15px;
`
const SearchManu = () => {
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
            <ChatFilter
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <DilogMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Menuitems>Profile</Menuitems>
                <Menuitems onClick={handleClose}>
                    <MarkChatUnreadIcon />
                    <Typography>Unread Chats</Typography>
                </Menuitems>
                <Menuitems onClick={handleClose}>
                    <PermContactCalendarIcon />
                    <Typography>Contacts</Typography>
                </Menuitems>
                <Menuitems onClick={handleClose}>
                    <SmsFailedIcon />
                    <Typography>Non-contacts</Typography>
                </Menuitems>
                <Menuitems onClick={handleClose}>
                    <Groups2Icon />
                    <Typography>Groups</Typography>
                </Menuitems>
            </DilogMenu>
        </Box>
    );
}

export default SearchManu
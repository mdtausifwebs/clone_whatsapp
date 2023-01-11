import { Drawer, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';
const DrawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "30%",
    boxShadow: 'none'
}
const Header = styled(Box)`
background:#008069;
height:107px;
color:#FFFFFF;
display:flex;
&>svg,& > p{
    margin-top:auto;
    padding:15px;
    font-weight:600;
}
`
const Component = styled(Box)`
background:#ededed;
height:85%;
`
const Text=styled(Typography)`
font-size:18px;
`
const InfoDrawer = ({ open, setopen }) => {
    const CloseHandlar = () => {
        setopen(false)
    }
    return (
        <Drawer
            open={open}
            onClose={CloseHandlar}
            PaperProps={{ sx: DrawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBackIcon onClick={() => setopen(false)} />
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

export default InfoDrawer
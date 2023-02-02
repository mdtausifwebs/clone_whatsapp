

import React, { useContext } from 'react'
import Logindilog from './account/Logindilog'
import { AppBar, Toolbar, styled, Box } from "@mui/material"
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatDilog from './Chat/ChatDilog';
import { AccountContext } from '../context/AccountProvider';
const Component = styled(Box)`
width:100%;
height:100vh;
// background:#DCDCDC;
background-color:#F0F2F5;
// border:1px solid red`

const ChatHeader = styled(AppBar)`
width:100%;
height:125px;
background-color:#00bfa5;
box-shadow:none;
`
const LoginHeader = styled(AppBar)`
width:100%;
height:220px;
background-color:#00bfa5;
box-shadow:none;
`
const Massanger = () => {
    const { account } = useContext(AccountContext)
    return (
        <Component>
            {account ?
                <>
                    <ChatHeader>
                        <Toolbar></Toolbar>
                    </ChatHeader>
                    <ChatDilog />
                </>
                : <>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <Logindilog />
                </>}
        </Component>
    )
}

export default Massanger
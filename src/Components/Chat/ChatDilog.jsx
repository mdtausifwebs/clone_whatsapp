import { Dialog, Box, styled } from '@mui/material'
import React from 'react'
import ChatBox from './chat/ChatBox'
import EmptyChat from './chat/EmptyChat'
import Manu from './manu/Manu'
import { AccountContext } from '../../context/AccountProvider'
import { useContext } from 'react'
const dialogStyle = {
    height: "98%",
    width: "100%",
    margin: "20px",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
}
const ParentComponent = styled(Box)`
display:flex;
`
const Leftcomponent = styled(Box)`
min-width:400px;
`
const Rightcomponent = styled(Box)`
width:73%;
min-width:300px;
height:"100%;
border-left:1px solid rgb(0,0,0,0.14)
`
const ChatDilog = () => {
    const { person } = useContext(AccountContext)
    return (
        <Dialog open={true} hideBackdrop={true}
            PaperProps={{ sx: dialogStyle }}>
            <ParentComponent>
                <Leftcomponent>
                    <Manu />
                </Leftcomponent>
                <Rightcomponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                </Rightcomponent>
            </ParentComponent>
        </Dialog>
    )
}

export default ChatDilog
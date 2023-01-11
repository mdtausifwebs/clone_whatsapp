import { Box } from '@mui/material'
import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'
const ChatBox = () => {
  const { person } = useContext(AccountContext)
  // console.log(person)
  return (
    <Box style={{ height: "80%" }}>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  )
}

export default ChatBox
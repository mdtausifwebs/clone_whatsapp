import { Box } from '@mui/material'
import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'
import { useEffect,useState } from 'react'
import {getConversation} from "../../../service/Api"
const ChatBox = () => {
  const { person, account } = useContext(AccountContext)
  // console.log(person)
  const [conversation, setconversation] = useState({})
  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.sub, receivedId: person.sub })
      // console.log("data",data);
      setconversation(data)
    }
    getConversationDetails()
  }, [person.sub,account.sub])
  return (
    <Box style={{ height: "80%" }}>
      <ChatHeader person={person} />
      <Messages person={person} conversation={conversation} />
    </Box>
  )
}

export default ChatBox
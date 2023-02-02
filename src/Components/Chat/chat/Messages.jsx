import { Box, styled } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import { useContext, useState, useRef } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { getMessage, newMessage } from "../../../service/Api"
import { useEffect } from 'react'
import Message from './Message'
const Wapper = styled(Box)`
width:100%;
`
const Component = styled(Box)`
background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size:50%;
height:80vh;
overflow-y:scroll;
`
const Container = styled(Box)`
padding: 1px 8px;
`
const Messages = ({ person, conversation }) => {
  const { account, socket, messageFlag, setmessageFlag } = useContext(AccountContext)
  const [messages, setmessages] = useState([])
  const [value, setvalue] = useState('')
  const [file, setfile] = useState('')
  const [image, setimage] = useState('')
  const scrollRef = useRef()
  const [incommingMessage, setincommingMessage] = useState(null)
  useEffect(() => {
    socket.current.on("getMessage", data => {
      setincommingMessage({
        ...data, createdAt: Date.now()
      })
    })
  }, [socket])

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(conversation._id)
      setmessages(data)
    }
    conversation._id && getMessageDetails()
  }, [person._id, conversation._id, messageFlag])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" })
  }, [messages])

  useEffect(() => {
    incommingMessage && conversation?.members?.includes(incommingMessage.senderId) &&
      setmessages(prev => [...prev, incommingMessage])
  }, [incommingMessage, conversation])

  const sendtext = async (e) => {
    const code = e.keyCode || e.which
    if (code === 13) {
      let message = []
      if (!file) {
        message = {
          senderId: account.sub,
          receivedId: person.sub,
          conversationId: conversation?.conversation?._id,
          type: "text",
          text: value
        }
      } else {
        message = {
          senderId: account.sub,
          receivedId: person.sub,
          conversationId: conversation?.conversation?._id,
          type: "file",
          text: image
        }
      }
      socket.current.emit("sendMessage", message)
      await newMessage(message)
      setimage("")
      setvalue("")
      setfile("")
      setmessageFlag(prev => !prev)
    }
  }
  useEffect(() => {
    const getdata = async () => {
      let data = await getMessage(conversation?.conversation?._id)
      setmessages(data.message)
    }
    conversation?.conversation?._id && getdata()
  }, [conversation?.conversation?._id, person.sub, messageFlag])



  return (
    <Wapper>
      <Component>
        {
          messages && messages.map((item, i) => {
            return <Container ref={scrollRef} key={i}>
              <Message message={item} />
            </Container>
          })

        }
      </Component>
      <Footer
        sendtext={sendtext}
        setvalue={setvalue}
        value={value}
        setfile={setfile}
        file={file}
        setimage={setimage} />
    </Wapper>
  )
}

export default Messages
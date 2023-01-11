import { Box, styled } from '@mui/material'
import React from 'react'
import Footer from './Footer'

const Wapper = styled(Box)`
width:100%;
`
const Component = styled(Box)`
background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size:50%;
height:80vh;
overflow-y:scroll;
`
const Messages = () => {
  return (
    <Wapper>
      <Component>Messages</Component>
      <Footer/>
    </Wapper>
  )
}

export default Messages
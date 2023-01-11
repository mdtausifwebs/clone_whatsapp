import React from 'react'
import { Box, styled, Divider, Typography } from "@mui/material"
import LockIcon from '@mui/icons-material/Lock';
import { emptyChatImage } from "../../../constants/logoImage"

const Component = styled(Box)`
width:100%
background:#f8f9fa;
padding:30px 0;
text-align:center;
height:85vh;
display:flex;
flex-direction:column;
justify-content:space-between;

`
const Container = styled(Box)`
padding:0 200px;
display:flex;
flex-direction:column;
gap:10px;
align-item:center;
`
const Image = styled("img")({
  width: "400px"
})


const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt='empty img' />
        <Typography>WhatsApp Web</Typography>
        <Typography>Send and receive messages without keeping your phone online.</Typography>
        <Typography>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Typography>
        <Divider />
      </Container>
      <Box>
        <Typography><LockIcon /> End-to-end encrypted</Typography>
      </Box>
    </Component>
  )
}

export default EmptyChat
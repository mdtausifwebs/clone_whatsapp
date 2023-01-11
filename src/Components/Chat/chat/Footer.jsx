import { Box, styled, InputBase } from '@mui/material'
import React from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';


const FooterComponent = styled(Box)`
display:flex;
// border:1px solid black;
background:#ededed;
width:100%;
align-item:center;
&>*{
  margin:5px;
  color:#919191;
}
`
const SearchBox = styled(Box)`
background:#ffffff;
border-radius:10px;
width:87%;
// border:1px solid black;
`
const InputFild=styled(InputBase)`
width:100%;
padding:20px;
height:15px;
padding-left:25px;
font-size:14px;
`
const ClipIcon=styled(AttachFileOutlinedIcon)`
transform:rotate(45deg)
`
const Footer = () => {
  return (
    <FooterComponent>
      <EmojiEmotionsOutlinedIcon />
      <ClipIcon />
      <SearchBox>
       <InputFild placeholder='Type Your Message Here'/>
      </SearchBox>
      <MicIcon />
    </FooterComponent>
  )
}

export default Footer
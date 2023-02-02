import { Box, styled, InputBase } from '@mui/material'
import React, { useEffect } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { UploadFile } from "../../../service/Api"

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
const InputFild = styled(InputBase)`
width:100%;
padding:20px;
height:15px;
padding-left:25px;
font-size:14px;
`
const ClipIcon = styled(AttachFileOutlinedIcon)`
transform:rotate(45deg)
`
const Footer = ({ sendtext, setvalue, value, file, setfile, setimage }) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData()
        data.append("name", file.name)
        data.append("file", file)
        let res = await UploadFile(data)
        console.log(res)
        setimage(res.imageurl)
      }
    }
    getImage()
  }, [file, setimage])
  const onfileChange = (e) => {
    setfile(e.target.files[0])
    setvalue(e.target.files[0].name)
  }
  return (
    <FooterComponent>
      <EmojiEmotionsOutlinedIcon />
      <label htmlFor='fileInput'>
        <ClipIcon />
      </label>
      <input  type="file" id='fileInput' onChange={(e) => onfileChange(e)} style={{ display: "none" }} />
      <SearchBox>
        <InputFild value={value} onKeyPress={(e) => sendtext(e)} onChange={(e) => setvalue(e.target.value)} placeholder='Type Your Message Here' />
      </SearchBox>
      <MicIcon />
    </FooterComponent>
  )
}

export default Footer

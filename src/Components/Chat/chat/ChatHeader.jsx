import React from 'react'
import { Box, Typography, styled } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Search as SearchIcon } from "@mui/icons-material"
// import { defaultProfilePicture } from "../../../constants/logoImage"
const Component = styled(Box)`
display:flex;
height:44px;
align-item:center;
padding:8px 16px;
border:1px solid balck;
background-color:#ededed;
// justify-content:space-between
`
const Image = styled("img")({
    width: "45px",
    height: "45px",
    borderRadius: "50%"
})
const Name = styled(Typography)`
margin-left:12px !important;

`
const Status = styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgba(0,0,0,0.6);
`
const RightContaiiner = styled(Box)`
margin-left:auto;
&>svg{
    padding:8px;
    font-size:24px;
    color:#000;
`
const ChatHeader = ({ person }) => {
    return (
        <Component>
            <Image src={person?.picture} alt="dp" />
            <Box>
                <Name>{person?.name}</Name>
                <Status>Offline</Status>
            </Box>
            <RightContaiiner>
                <SearchIcon />
                <MoreVertIcon />
            </RightContaiiner>
        </Component>
    )
}

export default ChatHeader
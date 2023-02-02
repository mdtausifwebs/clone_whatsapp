import React, { useContext } from 'react'
import { Box, Typography, styled } from "@mui/material"
import { formateDate ,downloadMedia} from "../../../Utils/Common-utils"
import ScrollToBottom from 'react-scroll-to-bottom';
import { AccountContext } from "../../../context/AccountProvider"
import GetAppIcon from '@mui/icons-material/GetApp';
import { iconPDF } from '../../../constants/logoImage';


const Own = styled(Box)`
background:#dcf8c6;
max-width:60%;
margin-left:auto;
padding:5px;
width:fit-content;
display:flex;
border-radius:10px;
word-break:break-word;
`
const Wrapper = styled(Box)`
background:#FFFFFF;
max-width:60%;
padding:5px;
width:fit-content;
border-radius:10px;
word-break:break-word;
`
const Text = styled(Typography)`
font-size:14px;
padding:0 25px 0 5px;
`
const Time = styled(Typography)`
font-size:10px;
color:#919191;
margin-top:6px;
word-break:keepp-all;
margin-top:auto;
`

const Message = ({ message }) => {
    // console.log(message)
    const { account } = useContext(AccountContext)
    return (
        <ScrollToBottom>
            {
                account.sub === message.senderId ?
                    <Own>
                        {
                            message.type === "file" ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Own> :
                    <Wrapper>

                        {
                            message.type === "file" ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                    </Wrapper>
            }
        </ScrollToBottom>
    )
}
const ImageMessage = ({ message }) => {
    return (
        <Box>
            {
                message?.text?.includes(".pdf") ?
                    <Box style={{ display: "flex" }}>
                        <img style={{ width: 80 }} src={iconPDF} alt="pdf" />
                        <a style={{ fontSize: 14 }} href={message.text}>{message.text.split("/").pop()}</a>
                    </Box> :
                    <img style={{ width: "150px", height: "150px" }} src={message.text} alt="upload" />
            }
            <Time style={{ postion: "absolute", bottom: 0, right: 0 }}>
                <GetAppIcon
                    onClick={(e) => downloadMedia(e, message.text)}
                    style={{ marginRight: 10, border: "1px solid black", borderRadius: "50%" }} fontSize="small" />
                {formateDate(message.updatedAt)}
            </Time>
        </Box>
    )
}
const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>
                {formateDate(message.updatedAt)}
            </Time>
        </>
    )
}


export default Message

    // < Text >
    // { message.text }
    //                     </Text >
    // <Time>
    //     <GetAppIcon />
    //     {formateDate(message.updatedAt)}
    // </Time> 
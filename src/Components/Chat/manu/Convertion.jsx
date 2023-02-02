import { Box, styled, Typography } from '@mui/material'
import { typography } from '@mui/system'
import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { setConversetion, getConversation } from "../../../service/Api"
import { formateDate } from "../../../Utils/Common-utils"

const Component = styled(Box)`
display:flex;
height:35px;
padding:10px 0 10px;
curser:pointer;
align-item:center;
`
const Image = styled("img")({
    width: 50,
    height: 45,
    padding: "0  14px",
    borderRadius: "50%",
    objectFit: "cover"
})
const Container=styled(Box)`
dispaly:flex;
`
const Timestamp=styled(typography)`
font-size:12px;
margin-left:auto;
color:#000000099;
margin-right:20px;
`
const Text=styled(typography)`
font-size:14px;
color:rgba(0,0,0,0.6);
`

const Convertion = ({ item }) => {
    const { setperson, account, messageFlag } = useContext(AccountContext)
    const [message, setmessage] = useState({})
    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, reciverId: item.sub } )
            setmessage({ text: data?.message, timestamp: data.updateAt })
        }
        getConversationDetails()
    }, [messageFlag,account,item])
    const getuser = async (user) => {
        setperson(user)
        await setConversetion({ senderId: account.sub, reciverId: user.sub})
    }
    return (
        <Component onClick={() => getuser(item)}>
            <Box>
                <Image src={item?.picture} alt="dp" />
            </Box>
            <Box>
                <Container>
                    <Typography>{item?.name}</Typography>
                    {message?.text &&
                        <Timestamp>{formateDate(message?.timestamp)}</Timestamp>}
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message?.text}</Text>
                </Box>
            </Box>
        </Component>
    )
}

export default Convertion
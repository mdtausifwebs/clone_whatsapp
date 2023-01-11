import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import {setConversetion} from "../../../service/Api"

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

const Convertion = ({ item }) => {
    const { setperson, account } = useContext(AccountContext)

    const getuser = async (user) => {
        setperson(user)
        await setConversetion({
            // senderId: "",
            senderId: account.sub,
            // receiverId: "",
            reciverId: user.sub,
        })

    }
    // console.log("person",person)

    return (
        <Component onClick={() => getuser(item)}>
            <Box>
                <Image src={item?.picture} alt="dp" />
            </Box>
            <Box>
                <Typography>{item?.name}</Typography>
            </Box>
        </Component>
    )
}

export default Convertion
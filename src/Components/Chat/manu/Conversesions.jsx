import { Box, Divider, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from "../../../context/AccountProvider"
import { getUsers } from "../../../service/Api"
import Convertion from './Convertion'

const Component = styled(Box)`
height:40vh;
overflow:overlay;
`
const StyleDivider = styled(Divider)`
margin:0 0 0 70px;
background-color:#e9edef;
opacity:0.6;
`

const Conversesions = ({ text }) => {
    const [usersList, setusersList] = useState([])
    const { account, socket, setactiveusers } = useContext(AccountContext)
    // console.log(account)
    useEffect(() => {
        const getUserdata = async () => {
            let users = await getUsers()
            const filterUser = users.users.filter((user) => user.name.toLowerCase().includes(text.toLowerCase()));
            setusersList([...filterUser])
        }
        getUserdata()
    }, [text])
    useEffect(() => {
        socket.current.emit("adduser", account)
        socket.current.on("getusers", users => {
            setactiveusers(users)
        })
    },[account])
    return (
        <Component>
            {
                usersList?.map((item, i) => {
                    return (
                        <Box key={i}>
                            {item?.sub !== account?.sub && <Convertion item={item} />}
                            <StyleDivider />
                        </Box>
                    )
                })
            }
        </Component>
    )
}

export default Conversesions
import React from 'react'
import { useContext, useState } from "react"
import { Box, styled, Typography } from "@mui/material"
import AutorenewIcon from '@mui/icons-material/Autorenew';
import MessageIcon from '@mui/icons-material/Message';
import { AccountContext } from "../../../context/AccountProvider"
import HeaderManu from './HeaderManu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
height:44px;
background:#ededed;
padding:1rem;
display:flex;
justify-content:space-between;
align-item:center;
`
const Image = styled("img")({
    height: 40,
    width: 40,
    borderRadius: "50%"
})
const IconComponent = styled(Box)`
curser:Pointer;
margin-left:auto;
display:flex;
&>*{
    margin-left:2px;
    padding:8px;
    color:#000;
};
// &:first-child{
//     font-size:22px;
//     margin-right:8px;
// }
`


const Header = () => {
    const { account } = useContext(AccountContext)
    const [openDrawer, setopenDrawer] = useState(false)
    // console.log(account)
    return (
        <>
            <Component >
                <Image src={account?.picture} alt={account?.picture} onClick={() => !openDrawer ? setopenDrawer(true) : null} />
                <Typography>{account?.name}</Typography>
                <IconComponent>
                    <AutorenewIcon onClick={() => window.location.reload()} />
                    <MessageIcon />
                    <HeaderManu open={openDrawer} setopen={setopenDrawer} />
                </IconComponent>
                <InfoDrawer open={openDrawer} setopen={setopenDrawer} />
            </Component>
        </>
    )
}

export default Header
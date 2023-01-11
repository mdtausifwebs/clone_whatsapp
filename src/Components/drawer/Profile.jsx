import { Box, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from "../../context/AccountProvider"

const Component = styled(Box)`
width:100%;
`
const ImageContainer = styled(Box)`
display:flex;
justify-content:center;
`
const Image = styled("img")({
    width: 200,
    height: 200,
    borderRadius: "50%",
    padding: "25px 0"
})
const BoxWraper = styled(Box)`
background:#FFFFFF;
padding:12px 30px 2px;
box-shadow:0 1px 3px rgba(0,0,0,0.08)
// &:first-child{
//     font-size:13px;
//     color:#009688;
// }
// &:last-child{
//     margin:14px 0;
//     color:#4A4A4A;
// }
`
const AboutBox=styled(Box)`
padding:15px 30px 10px;
& >p{
    font-size:14px;
}
`
const Profile = () => {
    const { account } = useContext(AccountContext)

    return (
        <Component>
            <ImageContainer>
                <Image src={account?.picture} alt="dp" />
            </ImageContainer>
            <BoxWraper>
                <Typography>Your Name</Typography>
                <Typography variant='h7'>{account?.name}</Typography>
            </BoxWraper>
            <AboutBox>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </AboutBox>
            <BoxWraper>
                <Typography >About</Typography>
                <Typography variant='h7'>Hi im tausif from Bihar</Typography>
            </BoxWraper>
        </Component>
    )
}

export default Profile
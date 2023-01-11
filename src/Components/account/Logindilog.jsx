import React, { useContext } from 'react'
import { Dialog, Box, Typography, List, ListItem, Link, styled } from "@mui/material"
import { qrCodeImage } from "../../constants/logoImage"
import { GoogleLogin } from "@react-oauth/google"
import jwt_decode from "jwt-decode"
import { AccountContext } from '../../context/AccountProvider'
import { adduser } from '../../service/Api'

const dialogStyle = {
    width: "66%",
    maxWidth: "100%",
    height: "90%",
    marginTop: "12%",
    overflow: "hidden",
}
const BoxComponent = styled(Box)`
display:flex;
padding:5rem 0 ;
// border: 10px solid red;
justify-Content:space-around

`
const BoxContainer = styled(Box)`
border: 0px solid red;
line-Height:2.5rem;

`
const QrCodeImage = styled("img")({
    height: 260,
    width: 260
})
const Logindilog = () => {
    const { setAccount } = useContext(AccountContext)
    const LogSuccessHandlar = async (res) => {
        const decodeinfo = jwt_decode(res.credential)
        setAccount(decodeinfo)
        await adduser(decodeinfo)
    }
    const LogErrorHandlar = (res) => {
        console.log("err", res)
    }
    return (
        <Dialog PaperProps={{ sx: dialogStyle }} hideBackdrop={true} open={true}>
            <BoxComponent>
                <BoxContainer>
                    <Typography sx={{ fontSize: "1.5rem" }} variant='h6'>To use WhatsApp on your computer:</Typography>
                    <List>
                        <ListItem>1. Open WhatsApp on your phone </ListItem>
                        <ListItem>2. Top <strong> Menu </strong>: or <strong>Settings</strong> and select <strong>Linked Devices</strong>                        </ListItem>
                        <ListItem>3. Tap on <strong> Link a Device </strong> </ListItem>
                        <ListItem>4.  Point your phone to this screen to capture the code </ListItem>
                    </List>
                    <Typography><Link to="/">Need help to get started?</Link></Typography>
                </BoxContainer>
                <Box style={{ position: "relative" }}>
                    <QrCodeImage src={qrCodeImage} alt="qr code" />
                    <Box style={{ position: "absolute", top: "40%", transform: "translateX(25%)" }}>
                        <GoogleLogin
                            onSuccess={LogSuccessHandlar}
                            onError={LogErrorHandlar}
                        />
                    </Box>
                </Box>
            </BoxComponent>
        </Dialog>
    )
}

export default Logindilog
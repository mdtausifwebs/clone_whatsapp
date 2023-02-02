import React from 'react'
import {Box, styled} from "@mui/material"
import Header from './Header'
import { useState } from 'react'
// import {AccountContext} from "../../../context/AccountProvider"
import Search from './Search'
import Conversesions from './Conversesions'
const Component=styled(Box)`
display:flex;
flex-direction:column;
gap:0.2rem;
`
const Manu = () => {
  // const {account}=useContext(AccountContext)
  // console.log("manu",account)
  const [text, settext] = useState('')
  return (
    <Component>
      <Header/>
      <Search settext={settext}/>
      <Conversesions text={text}/>
    </Component>
  )
}

export default Manu
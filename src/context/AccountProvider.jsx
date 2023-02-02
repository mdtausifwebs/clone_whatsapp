import React, { createContext, useState,useRef,useEffect } from 'react'
import {io} from "socket.io-client"

export const AccountContext = createContext(null)
const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState()
    const [person, setperson] = useState({})
    const [activeusers, setactiveusers] = useState([])
    const socket=useRef()
  const [messageFlag, setmessageFlag] = useState(false)
    useEffect(()=>{
        socket.current=io("ws://localhost:9000")
    },[])
    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setperson,
            socket,
            activeusers,
            setactiveusers,
            messageFlag,
            setmessageFlag
        }}>

            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
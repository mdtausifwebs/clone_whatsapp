import React, { createContext, useState } from 'react'

export const AccountContext = createContext(null)


const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState()
    const [person, setperson] = useState({})
    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setperson,
        }}>

            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
import React, { createContext, useState } from 'react'
//create context
export const contextData = createContext({})
const ContextProviders = ({ children }) => {
    const [show, setShow] = useState(false)
    // context data
    const sharedData = {
        setShow,
        show
    }
    return (
        <contextData.Provider value={sharedData}>
            {children}
        </contextData.Provider>
    )
}

export default ContextProviders

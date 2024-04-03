import React, { createContext, useState } from 'react'
//create context
export const contextData = createContext({})
const ContextProviders = ({ children }) => {
    //states
    const [show, setShow] = useState(false)
    const [showText, setShowText] = useState(false)
    // context data
    const sharedData = {
        setShow,
        show,
        setShowText,
        showText
    }
    return (
        <contextData.Provider value={sharedData}>
            {children}
        </contextData.Provider>
    )
}

export default ContextProviders

import React, { createContext, useState } from 'react'

export const DataContext = createContext("");
export const Context = ({ children }) => {
    const [context, setContext] = useState({
        cart: [],
        storagePath: '',
    });

    return (
        <DataContext.Provider value={{ context, setContext }}>
            {children}
        </DataContext.Provider>
    )
}

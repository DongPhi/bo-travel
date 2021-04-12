import React, {createContext, useState} from 'react'
import ProductsAPI from './api/ProductsAPI'
import HotelsAPI from './api/HotelsAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)

    
    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        hotelsAPI: HotelsAPI()
    }

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
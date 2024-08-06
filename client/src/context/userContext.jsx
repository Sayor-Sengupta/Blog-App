import { createContext, useContext, useState } from "react";

export const userContext = createContext()

export const useUserContext = ()=>{
    return useContext(userContext)
}
export const userContextProvider = ({children})=>{
    const [authUser,setAuthUser] = useState({})


    return <userContext.Provider value = {{authUser,setAuthUser}}>
        {children}
    </userContext.Provider>
}
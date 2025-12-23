import { createContext, useState } from "react";


export const sideBarContext = createContext()

export const SideBarProvider = ({children}) =>{
    const [isOpen,setIsOpen] = useState(false)
    const [type,setType] = useState('')

    return <sideBarContext.Provider value={{isOpen,setIsOpen,type,setType}}>{children}</sideBarContext.Provider>
}
import { createContext, useState } from "react";


export const sideBarContext = createContext()

export const SideBarProvider = ({children}) =>{
    const [isOpen,setIsOpen] = useState(false)

    return <sideBarContext.Provider value={{isOpen,setIsOpen}}>{children}</sideBarContext.Provider>
}
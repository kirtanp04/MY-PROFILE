import { createContext, useState } from "react";


export const Context = createContext()

export const Function = ({children})=>{
    const [age,setAge] = useState('')
    const [languages,setLanguages] = useState([])
    const[project,setProject] = useState([])
    const[profilePic,setProfilePic] = useState('')
    const[cv,setCv] = useState('')

    

    return(
        <Context.Provider value={{age,setAge,languages,setLanguages,project,setProject,profilePic,setProfilePic,cv,setCv}}>{children}</Context.Provider>
    )
}


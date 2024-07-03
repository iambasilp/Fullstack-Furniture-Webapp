import React from 'react'
import { createContext } from 'react'

export const UserContext = createContext(null)



const UserContextProvider = ({children}) => {
  return (
    <UserContext.Provider value={{name:"basil"}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

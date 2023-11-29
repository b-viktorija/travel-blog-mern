//scope the signed in/ signed out to the whole application; 

import { createContext, useState } from "react"

export const UserContext = createContext({})

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({}); 
  
  // value can also be [signedIn, setSigned in] - but user info does this for us; 
  return (
  <UserContext.Provider value={{userInfo, setUserInfo}}>
    {children}
  </UserContext.Provider>
  )
}

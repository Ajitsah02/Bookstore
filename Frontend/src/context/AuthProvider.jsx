import React , {createContext , useState, useContext} from 'react'


export const AuthContext = createContext();
export default function AuthProvider({children}) {
  const initialAuthUser= localStorage.getItem("Users")
  const [authUser ,setAauthUser] = useState(
    initialAuthUser? JSON.parse(initialAuthUser) : undefined

  )
  return(
    <AuthContext.Provider value = {[authUser,setAauthUser]}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth =()=>useContext(AuthContext);



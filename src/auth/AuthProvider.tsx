import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { User } from "firebase/auth";

export const AuthContext = React.createContext<{currentUser: User | null, setCurrentUser: React.Dispatch<User | null>} | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);
  
  const value = {
    currentUser,
    setCurrentUser,
  }
  React.useEffect(() => {
    console.log("userの切り替わり");

    onAuthStateChanged(auth, (user) => {
      console.log(user)
      setCurrentUser(user)
    });
  }, [])

  console.log(currentUser)


  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}
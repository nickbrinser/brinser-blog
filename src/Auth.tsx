// import React, { useEffect, useState, useContext } from 'react'
// import { auth } from './base'

// export const AuthContext = React.createContext()
// AuthContext.displayName = 'AuthContext'
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null)
//   const [pending, setPending] = useState(true)

//   useEffect(() => {
//     auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//       setPending(false)
//     })
//   }, [])

//   if (pending) {
//     return null
//   }
//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export function AuthProvider(props) {
//   const [currentUser, setCurrentUser] = useState(null)
//   const [pending, setPending] = useState(true)
//   useEffect(() => {
//     auth.onAuthStateChanged(user => {
//       setCurrentUser(user)
//       setPending(false)
//     })
//   }, [])

//   if (pending) {
//     return null
//   }
//   return <AuthContext.Provider value={{ user: currentUser }} {...props} />
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error('useAuth must be used within AuthProvider')
//   }
//   return context
// }

import React, { useEffect, useState, useContext } from 'react'
import firebase from 'firebase/app'
import { auth } from './base'
import * as O from 'fp-ts/Option'
import * as RD from '@devexperts/remote-data-ts'

// ---------- authentication actions -------------

export const signIn = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password)

export const signOut = () => auth.signOut()

// ----------- React authentication functionality --------

export type CurrentUser = RD.RemoteData<Error, O.Option<firebase.User>>

export const AuthContext = React.createContext<CurrentUser>(RD.initial)

interface AuthProviderProps {
  children: React.ReactElement
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<CurrentUser>(RD.pending)

  useEffect(() => {
    auth.onAuthStateChanged(
      user => {
        setUser(RD.success(O.fromNullable(user)))
      },
      error => {
        setUser(RD.failure(new Error(error.message)))
      }
    )
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

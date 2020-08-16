import React, { useContext } from 'react'
import { auth } from '../base'
import { AuthContext } from '../Auth'

import CoffeeCup from '../components/CoffeeCup'

const Home = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <>
      {currentUser && <button onClick={() => auth.signOut()}>Sign out</button>}
    </>
  )
}
export default Home

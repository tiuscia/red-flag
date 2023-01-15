import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"

function login() {
  const { data: session } = useSession

  if (session) {
    return (
      <>
        <p>Welcome {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    )
  } else {
    return (
      <>
        <p>You are not logged in</p>
        <button onClick={() => signIn()}>Sign In</button>
      </>
    )
  }
}

export default login

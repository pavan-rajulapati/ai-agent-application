"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export const HomeView = () => {
  const { data : session } = authClient.useSession()

  if (!session) {
    return(
      <p>loading....</p>
    )
  }

  return (
    <div>
      <div>
        <p>Loggedin as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    </div>
  )
}

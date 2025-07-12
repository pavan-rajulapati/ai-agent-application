"use client"

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const { data: session } = authClient.useSession() 
  const[email, setEmail] = useState("");
  const[name, setName] = useState("");
  const[password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      name,
      password
    }, {
      onError : () => {
        window.alert("Something went wrong")
      },
      onSuccess : () => {
        window.alert("Success")
      }
    });
  }

  if (session) {
    return <div>
      <p>Loggedin as {session.user.name}</p>
      <Button onClick={() => authClient.signOut()}>Sign out</Button>
    </div>
  }

  return (
    <div className="p-4 space-y-3">
      <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></Input> 
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input> 
      <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input> 
      <Button onClick={onSubmit}>Create user</Button>
    </div>
  );
}

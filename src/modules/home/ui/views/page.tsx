"use client"

import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"

export const HomeView = () => {
  const trpc = useTRPC()
  const { data, isLoading } = useQuery(
    trpc.hello.queryOptions({ text: "Pavan kumar" })
  )

  if (isLoading) return <p>Loading...</p>

  return <div>{data?.greeting}</div>
}

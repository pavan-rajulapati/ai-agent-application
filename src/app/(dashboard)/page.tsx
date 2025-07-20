import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/page";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth.api.getSession({
    headers : await headers()
  })

  if(!session) {
    redirect("/auth/sign-in")
  }
  return (
    <div className="p-4">
      <HomeView/>
    </div>
  )
}
 
export default Page;
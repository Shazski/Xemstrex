import { isFollowingUser } from "@/lib/follow-service"
import { getUserByuserName } from "@/lib/user-service"
import { notFound } from "next/navigation"

import { Actions } from "./_components/actions"
import { isBlockedByUser } from "@/lib/block-service"

interface UserPageProps {
  params: {
    username: string
  }
}

const UserPage = async ({params}: UserPageProps) => {
  const user = await getUserByuserName(params.username)

  if(!user) {
    notFound()
  }
  const isFollowing = await isFollowingUser(user.id)
  const isBlocking = await isBlockedByUser(user.id)
  return (
    <div className="flex flex-col gap-x-4">
      <p>UserName:{user.username}</p>
      <p>UserId:{user.id}</p>
      <p>IsFollwing:{JSON.stringify(isFollowing)}</p>
      <Actions userId={user.id} isFollowing={isFollowing} isBlocking={isBlocking}/>
    </div>
  )
}

export default UserPage
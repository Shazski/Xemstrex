"use client"

import { userSidebar } from "@/store/use-sidebar"
import { User } from "@prisma/client"
import { UserItem, UserItemSkelton } from "./user-item"

interface RecommendedProps {
  data: User[]
}


export const Recommended = ({ data }: RecommendedProps) => {

  const { collapsed } = userSidebar((state) => state)

  const showLabel = !collapsed && data.length > 0;

  return (
    <div>
      {
        showLabel && (
          <div className="pl-6 mb-4">
            <p className="text-sm text-muted-foreground">
              Recommended
            </p>
          </div>
        )
      }
      <ul className="space-y-2 px-2">
        {
          data.map((user) => (
            <UserItem key={user.id} username={user.username} imageUrl={user.imageUrl} isLive={false}/>
          ))
        }
      </ul>
    </div>
  )
}

export const RecommendedSkelton = () => {
  return (
    <ul className="px-2">
      {[...Array(3).fill(null).map((_, i) => (
        <UserItemSkelton key={i} />
      ))]}
    </ul>
  )
}
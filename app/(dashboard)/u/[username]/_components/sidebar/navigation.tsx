"use client"


import { useUser } from "@clerk/nextjs"
import { Fullscreen, KeyRound, MessageSquare, Users } from "lucide-react"
import { usePathname } from "next/navigation"
import { NavItem } from "./nav-item"

export const Navigation = () => {
  const pathName = usePathname()
  const { user } = useUser()

  const routes = [
    {
      label: "Stream",
      href: `/u/${user?.username}`,
      icon: Fullscreen
    },
    {
      label: "Keys",
      href: `/u/${user?.username}/keys`,
      icon: KeyRound
    },
    {
      label: "Chat",
      href: `/u/${user?.username}/chat`,
      icon: MessageSquare
    },
    {
      label: "Community",
      href: `/u/${user?.username}/community`,
      icon: Users
    }
  ]
  return (
    <ul className="space-y-4 px-2 pt-4 lg:pt-0">
      {
        routes.map((route) => (
          <NavItem key={route.href} label={route.label} icon={route.icon} href={route.href} isActive={pathName === route.href} />
        ))
      }
    </ul>
  )
}
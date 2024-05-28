"use client"

import { cn } from "@/lib/utils"
import { userSidebar } from "@/store/use-sidebar"
import { ReactNode } from "react"

interface WrapperProps {
  children: ReactNode
}


export const Wrapper = ({ children }: WrapperProps) => {

  const { collapsed } = userSidebar((state) => state)
  return (
    <aside className={cn("fixed left-0 flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50", collapsed && "w-[70px] duration-300 transition-all")}>
      {children}
    </aside>
  )
}
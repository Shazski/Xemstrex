"use client"

import { ReactNode } from "react"
import { useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"

import { cn } from "@/lib/utils"
import { userSidebar } from "@/store/use-sidebar"

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  const matches = useMediaQuery("(max-width: 1024px)")
  const { collapsed, onExpand, onCollapse } = userSidebar((state) => state)

  useEffect(() => {
    if(matches) {
      onCollapse()
    } else {
      onExpand()
    }
  }, [matches])
  return (
    <div className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}>
      {children}
    </div>
  )
}
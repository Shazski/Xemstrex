"use client"

import { ArrowLeftToLine, ArrowRightFromLine } from "lucide-react";

import { Hint } from "@/components/hint"
import { Button } from "@/components/ui/button";
import { userSidebar } from "@/store/use-sidebar"

export const Toggle = () => {

  const {
    collapsed,
    onExpand,
    onCollapse
  } = userSidebar((state) => state)

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
          <Hint label={label} side="left" asChild>
          <Button variant="ghost" className="h-auto p-2" onClick={onExpand}>
            <ArrowRightFromLine className="h-4 w-4" />
          </Button>
          </Hint>
        </div>
      )}
      {
        !collapsed && (
          <div className="p-3 pl-6 mb-2 flex items-center w-full">
            <p className="font-semibold text-primary">
              For you
            </p>
            <Hint label={label} side="right" asChild>
              <Button variant="ghost" className="h-auto p-2 ml-auto" onClick={onCollapse}>
                <ArrowLeftToLine className="h-4 w-4" />
              </Button>
            </Hint>
          </div>
        )
      }
    </>
  )
}
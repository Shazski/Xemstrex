"use client"

import { Switch } from "@/components/ui/switch";
import { useTransition } from "react";
import { updateStream } from "@/actions/stream"
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

type fieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly"

interface ToggleCardProps {
  field: fieldTypes;
  value: boolean;
  label: string;
}

export const ToggleCard = ({ field, label, value = false }: ToggleCardProps) => {

  const [isPending, startTransaction] = useTransition()
  const onChange = () => {
    startTransaction(() => {
      updateStream({ [field]: !value })
        .then(() => toast.success("chat settings updated!!!"))
        .catch(() => toast.error("Something went wrong"))
    })
  }
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold shrink-0">
          {label}
        </div>
        <div className="space-y-2">
          <Switch disabled={isPending} checked={value} onCheckedChange={onChange}>
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  )
}

export const ToggleCardSkeleton = () => {
  return (
    <Skeleton className = "rounded-xl p-10 w-full" />
  )
}
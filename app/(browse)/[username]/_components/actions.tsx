"use client"

import { useTransition } from "react"

import { Button } from "@/components/ui/button"
import { onFollow, onUnfollow } from "@/actions/follow"
import { toast } from "sonner";
import { onBlock, onUnblock } from "@/actions/block";


interface ActionsProps {
  isFollowing: boolean;
  isBlocking: boolean
  userId: string;
}

export const Actions = ({ isFollowing, userId, isBlocking }: ActionsProps) => {
  const [isPending, startTransition] = useTransition()

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) => toast.success(`Your are now following ${data.following.username}`))
        .catch(() => toast.error("Follow Failed"));
    })
  }
  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) => toast.success(`Your have unfollowed ${data.following.username}`))
        .catch(() => toast.error("Follow Failed"));
    })
  }

  const handleBlock = () => {
    startTransition(() => {
      onBlock(userId).then((data) => toast.success(`You have blocked ${data.blocked.username}`)).catch(() => toast.error("Block failed"))
    })
  }
  const handleUnblock = () => {
    startTransition(() => {
      onUnblock(userId).then((data) => toast.success(`You have unBlocked ${data.blocked.username}`)).catch(() => toast.error("Block failed"))
    })
  }

  const handleFollowing = () => {
    if (isFollowing) {
      handleUnfollow()
    } else {
      handleFollow()
    }
  }
  const handleBlocking = () => {
    if (isBlocking) {
      handleUnblock()
    } else {
      handleBlock()
    }
  }
  return (
    <>
      <Button disabled={isPending} onClick={handleFollowing} variant="primary">
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button disabled={isPending} onClick={handleBlocking} >
        {isBlocking ? "Unblock" : "Block"}
      </Button>
    </>
  )
}
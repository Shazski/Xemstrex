import { Button } from '@/components/ui/button'
import React from 'react'
import { UrlCard } from './_components/url-card'
import { getSelf } from '@/lib/auth-service'
import { getStreamByUserId } from '@/lib/stream-service'
import KeyCard from './_components/key-card'
import ConnectModal from './_components/connect-modal'

export default async function KeysPage() {
  const self = await getSelf()
  const stream = await getStreamByUserId(self.id)

  if (!stream) {
    throw new Error("Stream Not Found")
  }
  return (
    <div className='p-6'>
      <div className="flex items-center justify-between mb-4 ">
        <h1 className='text-2xl font-bold'>
          Keys & URLs
        </h1>
        <ConnectModal />
        <Button variant="primary">
          Generate
        </Button>
      </div>
      <div className='space-y-4'>
        <UrlCard value={stream?.serverUrl} />
        <KeyCard value={stream.streamKey} />
      </div>
    </div>
  )
}

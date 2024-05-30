"use server"

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export const Actions = () => {
  return (
    <div className='flex items-center justify-end gap-2'>
      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
        <Link href="/">
          <LogOut className="h-5 w-5 mr-2" />
          Exit
        </Link>
      </Button>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

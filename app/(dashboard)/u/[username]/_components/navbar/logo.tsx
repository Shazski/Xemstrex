"use client"
import Image from "next/image"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { cn } from "@/lib/utils"

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});


export const Logo = () => {
  return (
    <Link href="/"> 
      <div className="hidden lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="">
          <Image src='/assets/logo/XemStrex-logo.png' alt="Logo" width={152} height={152} />
        </div>
        <div className={cn("hidden lg:block", font.className)}> 
          <p className="text-xs text-muted-foreground">
            Creator Dashboard
          </p>
        </div>
      </div>
    </Link>
  )
}

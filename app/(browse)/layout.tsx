import { ReactNode, Suspense } from "react"
import { Navbar } from "./_components/navbar"
import { Sidebar, SidebarSkelton } from "./_components/sidebar"
import { Container } from "./_components/container"
const BrowseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkelton />}>
          <Sidebar />
        </Suspense>
        <Container>
          {children}
        </Container>
      </div>
    </>
  )
}

export default BrowseLayout
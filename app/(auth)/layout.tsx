import { ReactNode } from "react"
import { Logo } from "../(browse)/_components/logo"

const AuthLayout = ({ children }
  : {
    children: ReactNode
  }) => {
  return (
    <div className="h-full flex justify-center flex-col items-center space-y-6">
      <Logo/>
      {children}
    </div>
  )
}

export default AuthLayout
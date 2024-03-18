import type React from "react"
import { Outlet } from "react-router-dom"

import Footer from "../../Organisms/Footer"


const Root: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Root

import type React from "react"
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"

import Home from "./components/Templates/Home"
import Detail from "./components/Templates/Detail"
import Root from "./components/Templates/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "restaurant/:id",
        element: <Detail />,
      },
    ],
  },
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App

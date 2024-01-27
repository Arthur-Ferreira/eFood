import React from "react"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Home from "./components/Templates/Home"
import RestaurantDetails from "./components/Templates/RestaurantDetails"
// import Navbar from "./components/Molecules/Navbar"
// import Footer from "./components/Molecules/Footer"
{
  /* <Navbar />
<Footer /> */
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
    </Route>,
  ),
)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App

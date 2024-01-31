import type React from "react"

import { AsideContainer, AsideOverlay, AsideClose } from "./styles"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { AsideState } from "../../../features/aside/asideSlice"

import { closeAside } from "../../../features/cart/cartSlice"
import Cart from "../../Molecules/Cart"
import Delivery from "../../Molecules/Delivery"


type RestaurantAsideProps = {
  isOpen: boolean
}

const Aside: React.FC<RestaurantAsideProps> = ({ isOpen }) => {
  const dispatch = useAppDispatch()
  const currentAsideState = useAppSelector(state => state.aside.currentAsideState)


  if (!isOpen) {
    return null
  }

  const handleCloseAside = () => {
    dispatch(closeAside())
  }

  return (
    <>
      <AsideOverlay onClick={handleCloseAside} />
      <AsideContainer>
        <AsideClose onClick={handleCloseAside} />
        {currentAsideState === AsideState.Cart && <Cart />}
        {currentAsideState === AsideState.Delivery && <Delivery />}
        {/* {currentAsideState === AsideState.CartAddress && <CartAddress />} */}
      </AsideContainer>
    </>
  )
}

export default Aside

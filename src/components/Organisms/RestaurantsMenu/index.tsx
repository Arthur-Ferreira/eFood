import type React from "react"

import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"


import logo from "../../../public/logo.svg"
import { RestaurantHeader, RestaurantContainer, H2 } from "./styles"
import { LogoImg } from "../styles"
import Aside from "../Aside"
import { openAside } from "../../../features/cart/cartSlice"

const RestaurantMenu: React.FC = () => {
  const dispatch = useAppDispatch()
  const pratos = useAppSelector(state => state.cart.cartList)
  const isAsideOpen = useAppSelector(state => state.cart.isAsideOpen)

  const handleOpenAside = () => {
    dispatch(openAside())
  }

  return (
    <>
      <RestaurantHeader>
        <RestaurantContainer>
          <H2>Restaurantes</H2>
          <Link to={"/"}>
            <LogoImg src={`${logo}`} alt="efood logo" />
          </Link>
          <H2 onClick={handleOpenAside}>
            {pratos.length === 1 ? (
              <span>{pratos.length} produto no carrinho</span>
            ) : (
              <span>{pratos.length} produtos no carrinho</span>
            )}
          </H2>
        </RestaurantContainer>
      </RestaurantHeader>
      <Aside isOpen={isAsideOpen} />
    </>
  )
}

export default RestaurantMenu

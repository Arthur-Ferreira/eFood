import type React from "react"
import { Link } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../../app/hooks"

import logo from "../../../public/logo.svg"
import { RestaurantHeader, RestaurantContainer, H2 } from "./styles"
import { LogoImg } from "../styles"
import Aside from "../Aside"
import { open } from "../../../features/cart/cartSlice"

const RestaurantMenu = () => {
  const dispatch = useAppDispatch()
  const pratos = useAppSelector(state => state.cartList)
  const isOpen = useAppSelector(state => state.isOpen)

  const handleOpenAside = () => {
    dispatch(open())
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
      <Aside isOpen={isOpen} />
    </>
  )
}

export default RestaurantMenu

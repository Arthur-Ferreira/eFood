import type React from "react"

import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { AsideState, setAsideState } from "../../../features/aside/asideSlice"

import logo from "../../../public/logo.svg"
import { RestaurantHeader, RestaurantContainer, Button } from "./styles"
import { H3 } from "../../Atoms"
import { LogoImg } from "../styles"
import Aside from "../Aside"
import { openAside } from "../../../features/cart/cartSlice"

const RestaurantMenu: React.FC = () => {
  const dispatch = useAppDispatch()
  const pratos = useAppSelector(state => state.cart.cartList)
  const isAsideOpen = useAppSelector(state => state.cart.isAsideOpen)

  const handleOpenAside = () => {
    dispatch(setAsideState(AsideState.Cart))
    dispatch(openAside())
  }

  return (
    <>
      <RestaurantHeader>
        <RestaurantContainer>
          <H3>Restaurantes</H3>
          <Link to={"/"}>
            <LogoImg src={`${logo}`} alt="efood logo" />
          </Link>
          <Button onClick={handleOpenAside}>
            <H3>
              {pratos.length === 1 ? (
                <span>{pratos.length} produto no carrinho</span>
              ) : (
                <span>{pratos.length} produtos no carrinho</span>
              )}
            </H3>
          </Button>
        </RestaurantContainer>
      </RestaurantHeader>
      <Aside isOpen={isAsideOpen} />
    </>
  )
}

export default RestaurantMenu

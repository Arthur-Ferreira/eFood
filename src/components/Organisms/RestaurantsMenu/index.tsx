import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../../app/hooks"

import logo from "../../../public/logo.svg"
import { RestaurantHeader, RestaurantContainer, H2 } from "./styles"
import { LogoImg } from "../styles"
import Aside from "../Aside"

const RestaurantMenu = () => {
  const pratos = useAppSelector(state => state.cartList)
  const [isAsideOpen, setIsAsideOpen] = useState(false)

  const handleOpenAside = () => {
    setIsAsideOpen(true)
  }

  const handleCloseAside = () => {
    setIsAsideOpen(false)
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
      <Aside isOpen={isAsideOpen} handleCloseAside={handleCloseAside} />
    </>
  )
}

export default RestaurantMenu

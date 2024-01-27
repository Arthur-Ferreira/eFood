import type React from "react"

import logo from "../../../public/logo.svg"
import { RestaurantHeader, RestaurantContainer, H2 } from "./styles"
import { LogoImg } from "../styles"

const RestaurantMenu = () => {
  return (
    <RestaurantHeader>
      <RestaurantContainer>
        <H2>Restaurantes</H2>
        <LogoImg src={`${logo}`} alt="efood logo" />
        <H2>0 produto(s) no carrinho</H2>
      </RestaurantContainer>
    </RestaurantHeader>
  )
}

export default RestaurantMenu

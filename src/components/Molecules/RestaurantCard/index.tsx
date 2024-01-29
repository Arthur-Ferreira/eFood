import type React from "react"

import {
  RestaurantCardContainer,
  RestaurantCardImage,
  RestaurantCardInfo,
  RestaurantCardTitle,
  RestaurantCardDescription,
  RestaurantCardButton,
} from "./styles"

type RestaurantCardProps = {
  prato: any
}

const RestaurantCard = ({ prato }: RestaurantCardProps): JSX.Element => {
  const { nome, descricao, foto } = prato

  return (
    <RestaurantCardContainer>
      <RestaurantCardImage src={foto} alt={nome} />
      <RestaurantCardInfo>
        <RestaurantCardTitle>{nome}</RestaurantCardTitle>
        <RestaurantCardDescription>{descricao}</RestaurantCardDescription>
        <RestaurantCardButton>Mais detalhes</RestaurantCardButton>
      </RestaurantCardInfo>
    </RestaurantCardContainer>
  )
}

export default RestaurantCard

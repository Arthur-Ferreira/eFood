import type React from "react"

import {
  RestaurantCardContainer,
  RestaurantCardImage,
  RestaurantCardInfo,
  RestaurantCardTitle,
  RestaurantCardDescription,
  RestaurantCardButton,
} from "./styles"


interface RestaurantCardProps {
  name: string
  description: string
  image: string
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <RestaurantCardContainer>
      <RestaurantCardImage src={image} alt={name} />
      <RestaurantCardInfo>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RestaurantCardDescription>{description}</RestaurantCardDescription>
        <RestaurantCardButton>Adicionar ao carrinho</RestaurantCardButton>
      </RestaurantCardInfo>
    </RestaurantCardContainer>
  )
}

export default RestaurantCard

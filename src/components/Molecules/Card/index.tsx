import type React from "react"

import {
  RestaurantCardContainer,
  RestaurantCardImage,
  RestaurantCardInfo,
  RestaurantCardTitle,
  RestaurantCardRating,
  RestaurantCardDescription,
} from "./styles"

interface RestaurantCardProps {
  name: string
  rating: number
  description: string
  image: string
}

const Card: React.FC<RestaurantCardProps> = ({
  name,
  rating,
  description,
  image,
}) => {
  return (
    <RestaurantCardContainer>
      <RestaurantCardImage src={image} alt={name} />
      <RestaurantCardInfo>
        <RestaurantCardTitle>{name}</RestaurantCardTitle>
        <RestaurantCardRating>
          {rating} stars ({Math.floor(rating)} ratings)
        </RestaurantCardRating>
        <RestaurantCardDescription>{description}</RestaurantCardDescription>
      </RestaurantCardInfo>
    </RestaurantCardContainer>
  )
}

export default Card

import type React from "react"

import {
  CardContainer,
  CardImage,
  CardInfo,
  CardTitle,
  CardRating,
  CardDescription,
  CardButton,
  CardBadge,
  CardHeader,
} from "./styles"

import start from "../../../public/start.svg"

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
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardBadge>Japonesa</CardBadge>
      <CardInfo>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardRating>
            {rating}
            <img src={start} alt="Rating star" />
          </CardRating>
        </CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardButton to={"restaurant"}>Saiba mais</CardButton>
      </CardInfo>
    </CardContainer>
  )
}

export default Card

import type React from "react"

import {
  CardContainer,
  CardImage,
  CardInfo,
  CardTitle,
  CardRating,
  CardDescription,
  CardButton,
  CardHeader,
} from "./styles"

import CardBadge from "../../Atoms/Badge"

import start from "../../../public/start.svg"

interface RestaurantCardProps {
  name: string
  rating: number
  description: string
  image: string
  children: JSX.Element
}

const Card: React.FC<RestaurantCardProps> = ({
  name,
  rating,
  description,
  image,
  children
}) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      {children}
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

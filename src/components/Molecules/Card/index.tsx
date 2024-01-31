import CardBadge from "../../Atoms/Badge"
import HighlightBadge from "../../Atoms/HighlightBadge"

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

import start from "../../../public/start.svg"

const Card = ({ restaurant }: { restaurant: IRestaurant | undefined }) => {
  if (!restaurant) {
    return <h1>No Restaurants found!</h1>
  }

  const { id, titulo, avaliacao, tipo, descricao, destacado, capa } = restaurant

  return (
    <CardContainer>
      <CardImage src={capa} alt={titulo} />
      <HighlightBadge destacado={destacado} />
      <CardBadge>{tipo}</CardBadge>
      <CardInfo>
        <CardHeader>
          <CardTitle>{titulo}</CardTitle>
          <CardRating>
            {avaliacao}
            <img src={start} alt="Rating star" />
          </CardRating>
        </CardHeader>
        <CardDescription>{descricao}</CardDescription>
        <CardButton to={`restaurant/${id}`}>Saiba mais</CardButton>
      </CardInfo>
    </CardContainer>
  )
}

export default Card

import type React from "react"

import Card from "../../Molecules/Card"
import Header from "../../Organisms/Menu"
import Footer from "../../Organisms/Footer"

import sushi from "../../../public/assets/sushi.png"
import { MainContainer } from "../styles"
import CardList from "./styles"

interface Restaurant {
  name: string
  rating: number
  description: string
  image: string
}

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <CardList>
          <li>
            <Card
              name={"Hioki Sushi"}
              rating={4.9}
              description={
                "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
              }
              image={sushi}
            />
          </li>

          <li>
            <Card
              name={"Hioki Sushi"}
              rating={4.9}
              description={
                "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
              }
              image={sushi}
            />
          </li>

          <li>
            <Card
              name={"Hioki Sushi"}
              rating={4.9}
              description={
                "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
              }
              image={sushi}
            />
          </li>

          <li>
            <Card
              name={"Hioki Sushi"}
              rating={4.9}
              description={
                "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
              }
              image={sushi}
            />
          </li>
          <li>
            <Card
              name={"Hioki Sushi"}
              rating={4.9}
              description={
                "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
              }
              image={sushi}
            />
          </li>

          <li>
            <Card
              name={"Hioki Sushi"}
              rating={4.9}
              description={
                "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
              }
              image={sushi}
            />
          </li>
        </CardList>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home

{
  /* {restaurants.map(restaurant => (
<Card
  key={restaurant.name}
  name={restaurant.name}
  rating={restaurant.rating}
  description={restaurant.description}
  image={restaurant.image}
/>
))} */
}

import type React from "react"

import Card from "../../Molecules/Card"
import CardBadge from "../../Atoms/Badge"
import HighlightBadge from "../../Atoms/HighlightBadge"
import Header from "../../Organisms/Menu"
import Footer from "../../Organisms/Footer"

import sushi from "../../../public/assets/sushi.png"
import pasta from "../../../public/assets/restaurantsBackground.png"

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
            >
              <div>
                <HighlightBadge>{"Destaque da semana"}</HighlightBadge>
                <CardBadge>{"Japonesa"}</CardBadge>
              </div>
            </Card>
          </li>

          <li>
            <Card
              name={"La Dolce Vita Trattoria"}
              rating={4.6}
              description={
                "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              }
              image={pasta}
            >
              <CardBadge>{"Italiana"}</CardBadge>
            </Card>
          </li>

          <li>
            <Card
              name={"La Dolce Vita Trattoria"}
              rating={4.6}
              description={
                "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              }
              image={pasta}
            >
              <CardBadge>{"Italiana"}</CardBadge>
            </Card>
          </li>

          <li>
            <Card
              name={"La Dolce Vita Trattoria"}
              rating={4.6}
              description={
                "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              }
              image={pasta}
            >
              <CardBadge>{"Italiana"}</CardBadge>
            </Card>
          </li>
          <li>
            <Card
              name={"La Dolce Vita Trattoria"}
              rating={4.6}
              description={
                "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              }
              image={pasta}
            >
              <CardBadge>{"Italiana"}</CardBadge>
            </Card>
          </li>

          <li>
            <Card
              name={"La Dolce Vita Trattoria"}
              rating={4.6}
              description={
                "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
              }
              image={pasta}
            >
              <CardBadge>{"Italiana"}</CardBadge>
            </Card>
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

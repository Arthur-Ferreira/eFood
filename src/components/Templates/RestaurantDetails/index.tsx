import type React from "react"
import RestaurantMenu from "../../Organisms/RestaurantsMenu"
import Footer from "../../Organisms/Footer"
import { Container } from "../../Organisms/styles"
import { MainContainer } from "../styles"
import RestaurantCard from "../../Molecules/RestaurantCard"
import RestaurantList from "./styles"

import pizza from "../../../public/assets/pizza.png"
import Hero from "../../Molecules/Hero"

const RestaurantDetails: React.FC = () => {
  return (
    <>
      <RestaurantMenu />
      <Hero />
      <MainContainer>
        <RestaurantList>
          <li>
            <RestaurantCard
              name={"Hioki Sushi"}
              description={
                "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              }
              image={pizza}
            />
          </li>
          <li>
            <RestaurantCard
              name={"Hioki Sushi"}
              description={
                "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              }
              image={pizza}
            />
          </li>
          <li>
            <RestaurantCard
              name={"Hioki Sushi"}
              description={
                "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              }
              image={pizza}
            />
          </li>
          <li>
            <RestaurantCard
              name={"Hioki Sushi"}
              description={
                "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              }
              image={pizza}
            />
          </li>
          <li>
            <RestaurantCard
              name={"Hioki Sushi"}
              description={
                "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              }
              image={pizza}
            />
          </li>
          <li>
            <RestaurantCard
              name={"Hioki Sushi"}
              description={
                "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
              }
              image={pizza}
            />
          </li>
        </RestaurantList>
      </MainContainer>
      <Footer />
    </>
  )
}

export default RestaurantDetails

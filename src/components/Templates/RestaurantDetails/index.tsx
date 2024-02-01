import type React from "react"
import { useParams } from "react-router-dom"

import { useGetRestaurantQuery } from "../../../utils/api"

import RestaurantMenu from "../../Organisms/RestaurantsMenu"
import Hero from "../../Molecules/Hero"
import RestaurantCard from "../../Molecules/RestaurantCard"
import Footer from "../../Organisms/Footer"

import { MainContainer } from "../styles"
import RestaurantList from "./styles"

const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) return null

  const { cardapio } = restaurant

  return (
    <>
      <RestaurantMenu />
      <Hero
        capa={restaurant.capa}
        tipo={restaurant.tipo}
        titulo={restaurant.titulo}
      />
      <MainContainer>
        <RestaurantList>
          {cardapio &&
            cardapio.map((prato: any) => (
              <li key={prato.id}>
                <RestaurantCard prato={prato} />
              </li>
            ))}
        </RestaurantList>
      </MainContainer>
      <Footer />
    </>
  )
}

export default RestaurantDetails

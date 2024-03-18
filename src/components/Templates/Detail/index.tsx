import type React from "react"
import { useParams } from "react-router-dom"

import { useGetRestaurantQuery } from "../../../utils/api"

import RestaurantMenu from "../../Organisms/RestaurantsMenu"
import Hero from "../../Molecules/Hero"
import RestaurantCard from "../../Molecules/RestaurantCard"

import { MainContainer } from "../styles"
import RestaurantList from "./styles"

const Detail: React.FC = () => {
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
    </>
  )
}

export default Detail

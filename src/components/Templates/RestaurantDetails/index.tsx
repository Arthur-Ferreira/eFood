import type React from "react"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import RestaurantMenu from "../../Organisms/RestaurantsMenu"
import Footer from "../../Organisms/Footer"
import Hero from "../../Molecules/Hero"

import RestaurantList from "./styles"
import { MainContainer } from "../styles"
import RestaurantCard from "../../Molecules/RestaurantCard"

const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => res.json())
      .then(res => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return null
  }

  const { cardapio } = restaurant

  return (
    <>
      <RestaurantMenu />
      <Hero capa={restaurant.capa} tipo={restaurant.tipo} titulo={restaurant.titulo} />
      <MainContainer>
        {!restaurant ? (
          <h1>No restaurants found!</h1>
        ) : (
          <RestaurantList>
            {cardapio && cardapio.map((prato: any) => (
              <li key={prato.id}>
                <RestaurantCard prato={prato} />
              </li>
            ))}
          </RestaurantList>
        )}
      </MainContainer>
      <Footer />
    </>
  )
}

export default RestaurantDetails

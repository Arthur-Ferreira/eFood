import type React from "react"
import { useEffect, useState } from "react"

import Card from "../../Molecules/Card"
import Header from "../../Organisms/Menu"
import Footer from "../../Organisms/Footer"

import CardList from "./styles"
import { MainContainer } from "../styles"
import { H1 } from "../../Organisms/Menu/styles"

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([])

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then(res => res.json())
      .then(res => setRestaurants(res))
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        {!restaurants || restaurants.length === 0 ? (
          <H1>Carregando...</H1>
        ) : (
          <CardList>
            {restaurants.map(restaurant => (
              <li key={restaurant.id}>
                <Card restaurant={restaurant}
                />
              </li>
            ))}
          </CardList>
        )}
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home

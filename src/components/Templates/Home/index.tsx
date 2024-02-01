import type React from "react"

import Card from "../../Molecules/Card"
import Header from "../../Organisms/Menu"
import Footer from "../../Organisms/Footer"

import CardList from "./styles"
import { MainContainer } from "../styles"
import { useGetRestaurantsQuery } from "../../../utils/api"

const Home: React.FC = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) return null

  return (
    <>
      <Header />
      <MainContainer>
        <CardList>
          {restaurants.map(restaurant => (
            <li key={restaurant.id}>
              <Card restaurant={restaurant} />
            </li>
          ))}
        </CardList>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home

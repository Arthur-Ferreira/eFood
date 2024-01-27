import React, { useEffect, useState } from "react"
import RestaurantCard from "../../Molecules/Card"

interface Restaurant {
  name: string
  rating: number
  description: string
  image: string
}

const Home: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    // Fetch restaurant data from a mock API or a local JSON file
    const fetchData = async () => {
      const response = await fetch("/api/restaurants")
      const data = await response.json()
      setRestaurants(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Restaurants</h1>
      <div>
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.name}
            name={restaurant.name}
            rating={restaurant.rating}
            description={restaurant.description}
            image={restaurant.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

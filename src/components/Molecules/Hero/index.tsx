import type React from "react"

import { Background, BackgroundContainer, H2, P } from "./styles"

type RestaurantHeroProps = {
  capa: string
  tipo: string
  titulo: string
}

const Hero: React.FC<RestaurantHeroProps> = ({ capa, tipo, titulo }) => {
  return (
    <Background
      style={{
        backgroundImage: `url(${capa})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BackgroundContainer>
        <P>{tipo}</P>
        <H2>{titulo}</H2>
      </BackgroundContainer>
    </Background>
  )
}

export default Hero

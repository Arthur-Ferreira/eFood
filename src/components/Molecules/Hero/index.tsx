import type React from "react"

import { Background, BackgroundContainer, H2, P } from "./styles"

const Hero: React.FC = () => {
  return (
    <Background>
      <BackgroundContainer>
        <P>Italiana</P>
        <H2>La Dolce Vita Trattoria</H2>
      </BackgroundContainer>
    </Background>
  )
}

export default Hero

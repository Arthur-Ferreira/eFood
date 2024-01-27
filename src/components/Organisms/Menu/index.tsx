import type React from "react"

import logo from "../../../public/logo.svg"
import { StyledHeader, H1 } from "./styles"
import { Container, LogoImg } from "../styles"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <LogoImg src={`${logo}`} alt="efood logo" />
        <H1>Viva experiências gastronômicas no conforto da sua casa</H1>
      </Container>
    </StyledHeader>
  )
}

export default Header

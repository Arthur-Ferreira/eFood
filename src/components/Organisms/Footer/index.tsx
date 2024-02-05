import type React from "react"

import { Small } from "../../Atoms"

import logo from "../../../public/logo.svg"
import instagram from "../../../public/social/instagram.svg"
import facebook from "../../../public/social/facebook.svg"
import twitter from "../../../public/social/twitter.svg"

import { StyledFooter, SocialMedia } from "./styles"
import { Container, LogoImg } from "../styles"

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <div>
          <LogoImg src={logo} alt="efood" />
          <SocialMedia>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
          </SocialMedia>
        </div>
        <Small $variant="primary">
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Small>
      </Container>
    </StyledFooter>
  )
}

export default Footer

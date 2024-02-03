import styled from "styled-components";

import background from "../../../public/logoBackground.svg"
import { Container } from "../styles";

const RestaurantHeader = styled.header`
  height: 11.625rem;
  background: url(${background});
  text-align: center;
`

const RestaurantContainer = styled(Container)`
  flex-direction: row;
  padding: 2.5rem 1rem;
  
  @media(min-width: 64rem){
    padding: 2.5rem 0;
  }
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`



export { RestaurantHeader, RestaurantContainer, Button };
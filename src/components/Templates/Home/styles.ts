import styled from "styled-components";

import { List } from "../styles"

const CardList = styled(List)`
  row-gap: 3rem;
  column-gap: 5rem;
  
  @media (min-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
  }

`

export default CardList;
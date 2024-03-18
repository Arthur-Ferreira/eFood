import styled from "styled-components";

import { List } from "../styles"

const RestaurantList = styled(List)`
row-gap: 2rem;

@media (min-width: 48rem) {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
}

@media (min-width: 64rem) {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2.5rem;
}

`

export default RestaurantList;
import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  background-color: #FFF8F2;
`

const CardList = styled.ul`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0 7.5rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 3rem;
  column-gap: 5rem;
  justify-items: center;
  
  @media (min-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
  }

`

export { MainContainer, CardList };
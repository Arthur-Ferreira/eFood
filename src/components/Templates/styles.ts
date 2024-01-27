import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  background-color: #FFF8F2;
`

const List = styled.ul`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0 7.5rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

export { MainContainer, List };
import styled from "styled-components";

import backgroundCover from "../../../public/assets/restaurantsBackground.png"

const Background = styled.section`
  height: 280px;
  background: url(${backgroundCover}), lightgray 50% / cover no-repeat;
`

const BackgroundContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 2.5rem 0;
  margin: 0 auto;
`

const H2 = styled.h2`
  color: #FFF;
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`

const P = styled.p`
  color: #FFF;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`



export { Background, BackgroundContainer, H2, P }
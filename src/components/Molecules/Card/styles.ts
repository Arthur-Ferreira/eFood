import styled from "styled-components"

const RestaurantCardContainer = styled.div`
  width: 100%;
  max-width: 29.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
`
  
const RestaurantCardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`
  
const RestaurantCardInfo = styled.div`
  background: #FFF;
  border: 1px solid #E66767;
  border-top: none;
  padding: 0.6rem;
  padding-top: 0;
`
  
const RestaurantCardTitle = styled.h3`
  color: #E66767;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  margin: 0;
  // line-height: normal;
`

const RestaurantCardRating = styled.p`
  color: #E66767;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const RestaurantCardDescription = styled.p`
  color: #E66767;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`

export {
  RestaurantCardContainer,
  RestaurantCardImage,
  RestaurantCardInfo,
  RestaurantCardTitle,
  RestaurantCardRating,
  RestaurantCardDescription
}
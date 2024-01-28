import styled from "styled-components"

const RestaurantCardContainer = styled.div`
  border-radius: 8px;
  background-color: #E66767;
  width: 100%;
  max-width: 20rem;
  overflow: hidden;
  padding: 0.5rem;
`

const RestaurantCardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`

const RestaurantCardInfo = styled.div`
  border: 1px solid #E66767;
  border-top: none;
`

const RestaurantCardTitle = styled.h3`
color: #FFEBD9;
font-size: 1rem;
font-style: normal;
font-weight: 900;
line-height: normal;
`

const RestaurantCardDescription = styled.p`
  color: #FFEBD9;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  margin: 1rem 0;
  
`

const RestaurantCardButton = styled.button`
  background-color: #FFEBD9;
  border: none;
  color: #E66767;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0.25rem 0;
  width: 100%;

`


export {
  RestaurantCardContainer,
  RestaurantCardImage,
  RestaurantCardInfo,
  RestaurantCardTitle,
  RestaurantCardDescription,
  RestaurantCardButton,
}
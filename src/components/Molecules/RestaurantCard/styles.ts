import styled from "styled-components"
import { P } from "../../Atoms/Typography/styles"

const RestaurantCardContainer = styled.div`
  border-radius: 8px;
  background-color: #E66767;
  width: 100%;
  max-width: 20rem;
  height: 100%;
  max-height: 21.125rem;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 49%;
`
  
const RestaurantCardDescription = styled(P)`
  line-height: 1.375rem;
  height: 100%;
  max-height: 5.5rem;
  overflow: hidden;
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
  RestaurantCardDescription,
  RestaurantCardButton,
}
import styled from "styled-components"

import { Link } from "react-router-dom"
import { colors } from "../../Global/vars"
import { P } from "../../Atoms/Typography/styles"

const CardContainer = styled.div`
  width: 100%;
  max-width: 29.5rem;
  height: 25rem;
  overflow: hidden;
  position: relative;
`

const CardImage = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
  margin-bottom: -0.3rem;
  `

const CardInfo = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.white};
  border: 1px solid ${colors.indianRed};
  border-top: none;
  padding: 0.6rem;
`

const CardRating = styled.p`
  color: ${colors.indianRed};
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const CardDescription = styled(P)`
  color: ${colors.indianRed};
  line-height: 1.375rem;
  text-overflow: ellipsis;
  height: 100%;
  max-height: 5.5rem;
  overflow: hidden;
`

const CardButton = styled(Link)`
  display: inline-block;
  height: 1.5rem;
  width: 5.125rem;
  background-color: ${colors.indianRed};
  border: none;
  color: ${colors.antiqueWhite};
  text-align: center;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0.25rem 0.3rem;
  text-decoration: none;
`

const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export {
  CardContainer,
  CardImage,
  CardInfo,
  CardRating,
  CardDescription,
  CardButton,
  CardHeader,
}
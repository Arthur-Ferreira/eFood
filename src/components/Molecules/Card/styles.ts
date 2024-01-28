import styled from "styled-components"

import { Link } from "react-router-dom"

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
  background: #FFF;
  border: 1px solid #E66767;
  border-top: none;
  padding: 0.6rem;
`

const CardTitle = styled.h3`
  color: #E66767;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const CardRating = styled.p`
  color: #E66767;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const CardDescription = styled.p`
  color: #E66767;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
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
  background-color: #E66767;
  border: none;
  color: #FFEBD9;
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
  CardTitle,
  CardRating,
  CardDescription,
  CardButton,
  CardHeader,
}
import styled from "styled-components"

import lixeira from "../../../public/lixeira.svg"

const AsideContent = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0.75rem;
  width: 100%;
  height: 6.25rem;
  background-color: #FFEBD9;
`

const AsideInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: flex-start;
  width: 100%;
`

const AsideImage = styled.img`
  width: 100%;
  max-width: 5rem;
  height: 100%;
  max-height: 5rem;
  object-fit: cover;
`

const AsideTitle = styled.h3`
  color: #E66767;
  font-size: 1rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  
`

const AsidePreco = styled.span`
  display: block;
  color: #E66767;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  overflow: hidden;
`

const AsideButton = styled.button`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  background: url('${lixeira}') transparent no-repeat;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  height: 1rem;
  width: 1rem;
`

export {
  AsideContent,
  AsideImage,
  AsideInfo,
  AsideTitle,
  AsidePreco,
  AsideButton,
}
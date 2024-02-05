import styled from "styled-components"

import close from "../../../public/close.svg"
import { breakpoints, colors } from "../../Global/vars"
import { H4, P } from "../../Atoms/Typography/styles"

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

const ModalContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 8px;
  background-color: ${colors.indianRed};
  width: 100%;
  max-width: 25rem;
  height: 100%;
  max-height: 39.5rem;
  overflow: hidden;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  
  @media(min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    max-width: 64rem;
    max-height: 21.5rem;
  }
`

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 17.5rem;
  object-fit: cover;
  
  @media(min-width: ${breakpoints.desktop}) {
    max-width: 17.5rem;
  }
`

const ModalInfo = styled.div`
  width: 100%;
`

const ModalTitle = styled(H4)`
  color: ${colors.white};
`

const ModalDescription = styled(P)`
  color: ${colors.white};
  margin: 1rem 0;
`

const ModalPorcao = styled.span`
  color: ${colors.white};
  display: block;
  height: 100%;
  max-height: 5.5rem;
  overflow: hidden;
  margin-top: 2rem;
`

const ModalButton = styled.button`
  background-color: #FFEBD9;
  border: none;
  color: ${colors.indianRed};
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0.25rem 0;
  width: 100%;
  max-width: 13.625rem;
`

const ModalClose = styled.button`
  background: url('${close}') transparent;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  height: 1rem;
  width: 1rem;
  cursor: pointer;
`

export {
  ModalOverlay,
  ModalContainer,
  ModalImage,
  ModalInfo,
  ModalTitle,
  ModalDescription,
  ModalPorcao,
  ModalButton,
  ModalClose
}
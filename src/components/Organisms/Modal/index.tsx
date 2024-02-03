import type React from "react"

import {
  ModalContainer,
  ModalImage,
  ModalInfo,
  ModalTitle,
  ModalDescription,
  ModalPorcao,
  ModalButton,
  ModalOverlay,
  ModalClose,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { addItem, close, openAside } from "../../../features/cart/cartSlice"
import { parseToBrl } from "../../../utils/fn"

type RestaurantModalProps = {
  isOpen: boolean
}

const Modal: React.FC<RestaurantModalProps> = ({ isOpen }) => {
  const dispatch = useAppDispatch()
  const modalData = useAppSelector(state => state.cart.modalData)

  if (!isOpen || !modalData) {
    return null
  }

  const { descricao, foto, nome, porcao, preco, id } = modalData

  const handleClick = () => {
    if (nome && preco && id) {
      dispatch(addItem(id, nome, preco, foto))
      dispatch(close())
    }
    dispatch(openAside())
  }

  const handleCloseModal = () => {
    dispatch(close())
  }

  return (
    <>
      <ModalOverlay onClick={handleCloseModal} />
      <ModalContainer>
        <ModalClose onClick={handleCloseModal} />
        <ModalImage src={foto} alt={nome} />
        <ModalInfo>
          <ModalTitle>{nome}</ModalTitle>
          <ModalDescription>
            {descricao}
            <ModalPorcao>Serve: {porcao}</ModalPorcao>
          </ModalDescription>
          <ModalButton onClick={handleClick}>
            Adicionar ao carrinho - {parseToBrl(preco)}
          </ModalButton>
        </ModalInfo>
      </ModalContainer>
    </>
  )
}

export default Modal

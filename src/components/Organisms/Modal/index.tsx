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
import { useAppDispatch } from "../../../app/hooks"
import { addItem } from "../../../features/cart/cartSlice"

type RestaurantModalProps = {
  isOpen: boolean
  handleCloseModal: () => void
  prato: {
    descricao: string
    foto: string
    nome: string
    porcao?: string
    preco?: number
    id?: number
  }
}

const Modal: React.FC<RestaurantModalProps> = ({
  isOpen,
  handleCloseModal,
  prato,
}) => {
  const dispatch = useAppDispatch()
  const { descricao, foto, nome, porcao, preco, id } = prato

  if (!isOpen) {
    return null
  }

  const handleClick = () => {
    if (nome && preco && id) {
      dispatch(addItem(id, nome, preco, foto))
      handleCloseModal()
    }
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
            <ModalPorcao>{porcao}</ModalPorcao>
          </ModalDescription>
          <ModalButton onClick={handleClick}>
            Adicionar ao carrinho - R$ {preco}
          </ModalButton>
        </ModalInfo>
      </ModalContainer>
    </>
  )
}

export default Modal

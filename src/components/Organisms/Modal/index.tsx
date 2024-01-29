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

type RestaurantModalProps = {
  isOpen: boolean
  handleCloseModal: () => void
  prato: {
    descricao: string
    foto: string
    nome: string
    porcao?: string
    preco?: number
  }
}

const Modal: React.FC<RestaurantModalProps> = ({
  isOpen,
  handleCloseModal,
  prato,
}) => {
  const { descricao, foto, nome, porcao, preco } = prato

  if (!isOpen) {
    return null
  }

  return (
    <>
      <ModalOverlay />
      <ModalContainer>
        <ModalClose onClick={handleCloseModal} />
        <ModalImage src={foto} alt={nome} />
        <ModalInfo>
          <ModalTitle>{nome}</ModalTitle>
          <ModalDescription>
            {descricao}
            <ModalPorcao>{porcao}</ModalPorcao>
          </ModalDescription>
          <ModalButton>Adicionar ao carrinho - R$ {preco}</ModalButton>
        </ModalInfo>
      </ModalContainer>
    </>
  )
}

export default Modal

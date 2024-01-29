import type React from "react"
import { useState } from "react"

import Modal from "../../Organisms/Modal"

import {
  RestaurantCardContainer,
  RestaurantCardImage,
  RestaurantCardInfo,
  RestaurantCardTitle,
  RestaurantCardDescription,
  RestaurantCardButton,
} from "./styles"

type RestaurantCardProps = {
  prato: {
    nome: string
    descricao: string
    foto: string
  }
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ prato }) => {
  const { nome, descricao, foto } = prato

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <RestaurantCardContainer>
        <RestaurantCardImage src={foto} alt={nome} />
        <RestaurantCardInfo>
          <RestaurantCardTitle>{nome}</RestaurantCardTitle>
          <RestaurantCardDescription>{descricao}</RestaurantCardDescription>
          <RestaurantCardButton onClick={handleOpenModal}>
            Mais detalhes
          </RestaurantCardButton>
        </RestaurantCardInfo>
      </RestaurantCardContainer>
      <Modal isOpen={isModalOpen} handleCloseModal={handleCloseModal} prato={prato} />
    </>
  )
}

export default RestaurantCard

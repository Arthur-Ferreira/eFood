import type React from "react"

import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { open } from "../../../features/cart/cartSlice"

import { H4 } from "../../Atoms"
import Modal from "../../Organisms/Modal"

import {
  RestaurantCardContainer,
  RestaurantCardImage,
  RestaurantCardInfo,
  RestaurantCardDescription,
  RestaurantCardButton,
} from "./styles"

type RestaurantCardProps = {
  prato: {
    nome: string
    descricao: string
    foto: string
    porcao?: string
    preco?: number
    id?: number
  }
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ prato }) => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.cart.isOpen)

  const { nome, descricao, foto, porcao, preco, id } = prato

  const handleOpenModal = () => {
    dispatch(open({ nome, descricao, foto, porcao, preco, id }))
  }

  return (
    <>
      <RestaurantCardContainer>
        <RestaurantCardImage src={foto} alt={nome} />
        <RestaurantCardInfo>
          <H4 variant="secondary">{nome}</H4>
          <RestaurantCardDescription>{descricao}</RestaurantCardDescription>
          <RestaurantCardButton onClick={handleOpenModal}>
            Mais detalhes
          </RestaurantCardButton>
        </RestaurantCardInfo>
      </RestaurantCardContainer>
      <Modal isOpen={isOpen} />
    </>
  )
}

export default RestaurantCard

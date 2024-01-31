import type React from "react"

import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { open } from "../../../features/cart/cartSlice"

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
    porcao?: string
    preco?: number
    id?: number
  }
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ prato }) => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(state => state.cart.isOpen)

  const { nome, descricao, foto } = prato

  const handleOpenModal = () => {
    const { nome, descricao, foto, porcao, preco, id } = prato;
    dispatch(open({ nome, descricao, foto, porcao, preco, id }));
  };
  

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
      <Modal isOpen={isOpen} />
    </>
  )
}

export default RestaurantCard

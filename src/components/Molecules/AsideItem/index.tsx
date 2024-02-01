import type React from "react"

import { useAppDispatch } from "../../../app/hooks"
import { removeItem } from "../../../features/cart/cartSlice"
import { parseToBrl } from "../../../utils/fn"

import {
  AsideContent,
  AsideImage,
  AsideInfo,
  AsideTitle,
  AsidePreco,
  AsideButton,
} from "./styles"

type RestaurantAsideProps = {
  prato: {
    id: number
    foto: string
    nome: string
    preco: number
  }
}

const AsideItem: React.FC<RestaurantAsideProps> = ({ prato }) => {
  const dispatch = useAppDispatch()

  const { foto, nome, preco, id } = prato

  const onRemoveItem = () => {
    if (id) {
      dispatch(removeItem(id))
    }
  }

  return (
    <AsideContent>
      <AsideImage src={foto} alt={nome} />
      <AsideInfo>
        <AsideTitle>{nome}</AsideTitle>
        <AsidePreco>{parseToBrl(preco)}</AsidePreco>
        <AsideButton onClick={onRemoveItem} />
      </AsideInfo>
    </AsideContent>
  )
}

export default AsideItem

import type React from "react"

import {
  AsideContainer,
  AsideOverlay,
  AsideClose,
  AsideList,
  AsideTotal,
  AsideTotalHeader,
  AsideTotalButton,
} from "./styles"
import { useAppSelector } from "../../../app/hooks"

import AsideItem from "../../Molecules/AsideCard"
import { H2 } from "../../Molecules/Hero/styles"

type RestaurantAsideProps = {
  isOpen: boolean
  handleCloseAside: () => void
}

const Aside: React.FC<RestaurantAsideProps> = ({
  isOpen,
  handleCloseAside,
}) => {
  const pratos = useAppSelector(state => state.cartList)

  if (!isOpen) {
    return null
  }

  const getTotalPrices = () => {
    return pratos.reduce((accumulator, current) => {
      return (accumulator += current.preco)
    }, 0)
  }

  return (
    <>
      <AsideOverlay onClick={handleCloseAside} />
      <AsideContainer>
        <AsideClose onClick={handleCloseAside} />
        {!pratos || pratos.length === 0 ? (
          <H2>{pratos.length} produtos no carrinho</H2>
        ) : (
          <>
            <AsideList>
              {pratos.map(prato => (
                <li key={prato.id}>
                  <AsideItem prato={prato} />
                </li>
              ))}
            </AsideList>
            <AsideTotal>
              <AsideTotalHeader>
                <h3>Valor Total</h3>
                <p>R$ {getTotalPrices().toFixed(2)}</p>
              </AsideTotalHeader>
              <AsideTotalButton>Continuar com a entrega</AsideTotalButton>
            </AsideTotal>
          </>
        )}
      </AsideContainer>
    </>
  )
}

export default Aside

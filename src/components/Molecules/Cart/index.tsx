import type React from "react"

import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { AsideState, setAsideState } from "../../../features/aside/asideSlice"

import {
  AsideList,
  AsideTotal,
  AsideTotalHeader,
  AsideTotalButton,
} from "./styles"

import AsideItem from "../AsideItem"
import { H2 } from "../Hero/styles"

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const pratos = useAppSelector(state => state.cart.cartList)

  const getTotalPrices = () => {
    return pratos.reduce((accumulator, current) => {
      return (accumulator += current.preco)
    }, 0)
  }

  const showDelivery = () => {
    dispatch(setAsideState(AsideState.Delivery));
  };

  return (
    <>
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
            <AsideTotalButton onClick={showDelivery}>Continuar com a entrega</AsideTotalButton>
          </AsideTotal>
        </>
      )}
    </>
  )
}

export default Cart

import type React from "react"

import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { AsideState, setAsideState } from "../../../features/aside/asideSlice"
import { getTotalPrice, parseToBrl } from "../../../utils/fn"

import AsideItem from "../AsideItem"
import { H2, H4, P } from "../../Atoms"

import {
  AsideList,
  AsideTotal,
  AsideTotalHeader,
  AsideTotalButton,
} from "./styles"

const Cart: React.FC = () => {
  const dispatch = useAppDispatch()
  const pratos = useAppSelector(state => state.cart.cartList)

  const showDelivery = () => {
    dispatch(setAsideState(AsideState.Form))
  }

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
              <H4>Valor Total</H4>
              <P>{parseToBrl(getTotalPrice(pratos))}</P>
            </AsideTotalHeader>
            <AsideTotalButton onClick={showDelivery}>
              Continuar com a entrega
            </AsideTotalButton>
          </AsideTotal>
        </>
      )}
    </>
  )
}

export default Cart

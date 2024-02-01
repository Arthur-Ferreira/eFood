import type React from "react"
import { useNavigate } from "react-router-dom"

import { H2 } from "../Hero/styles"

import { CheckoutDescription, CheckoutButton } from "./styles"
import { AsideState, setAsideState } from "../../../features/aside/asideSlice"
import { useAppDispatch } from "../../../app/hooks"
import { clear, closeAside } from "../../../features/cart/cartSlice"

  

interface CheckoutProps {
  order: string
  primaryStep: () => void
}

const Checkout: React.FC<CheckoutProps> = ({ order, primaryStep }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const handleClick = () => {
    dispatch(setAsideState(AsideState.Cart))
    dispatch(clear())
    dispatch(closeAside())
    navigate('/')
    primaryStep()
  }

  return (
    <>
      <H2>Pedido realizado - {order}</H2>
      <CheckoutDescription>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido. Gostaríamos
        de ressaltar que nossos entregadores não estão autorizados a realizar
        cobranças extras.
      </CheckoutDescription>
      <CheckoutDescription>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </CheckoutDescription>
      <CheckoutDescription>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </CheckoutDescription>
      <CheckoutButton onClick={handleClick}>Concluir</CheckoutButton>
    </>
  )
}

export default Checkout

import type React from "react"

import { AsideState, setAsideState } from "../../../features/aside/asideSlice"
import { useAppDispatch } from "../../../app/hooks"

import {
  Form,
  FormLabel,
  FormInput,
  FormAddress,
  FormTotalActions,
  FormTotalButton,
} from "./styles"

import { H2 } from "../Hero/styles"

const Delivery: React.FC = () => {
  const dispatch = useAppDispatch()

  const showPayment = () => {
    dispatch(setAsideState(AsideState.Payment))
  }

  const showCart = () => {
    dispatch(setAsideState(AsideState.Cart))
  }

  return (
    <>
      <H2>Entrega</H2>
      <Form>
        <div>
          <FormLabel htmlFor="name">Quem irá receber</FormLabel>
          <FormInput type="text" id="name" name="name" required />
        </div>
        <div>
          <FormLabel htmlFor="address">Endereço</FormLabel>
          <FormInput type="text" id="address" name="address" required />
        </div>
        <div>
          <FormLabel htmlFor="city">Cidade</FormLabel>
          <FormInput type="text" id="city" name="city" required />
        </div>
        <FormAddress>
          <div>
            <FormLabel htmlFor="code">CEP</FormLabel>
            <FormInput type="text" id="code" name="code" required />
          </div>
          <div>
            <FormLabel htmlFor="number">Número</FormLabel>
            <FormInput type="text" id="number" name="number" required />
          </div>
        </FormAddress>
        <div>
          <FormLabel htmlFor="complement">Complemento (opcional)</FormLabel>
          <FormInput type="text" id="complement" name="complement" />
        </div>
        <FormTotalActions>
          <FormTotalButton onClick={showPayment}>
            Continuar com o pagamento
          </FormTotalButton>
          <FormTotalButton onClick={showCart}>
            Voltar para o carrinho
          </FormTotalButton>
        </FormTotalActions>
      </Form>
    </>
  )
}

export default Delivery

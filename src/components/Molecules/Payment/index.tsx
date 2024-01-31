import type React from "react"

import { AsideState, setAsideState } from "../../../features/aside/asideSlice"
import { useAppDispatch } from "../../../app/hooks"

import {
  Form,
  FormLabel,
  FormInput,
  FormCardInfo,
  FormDate,
  FormTotalActions,
  FormTotalButton,
} from "./styles"

import { H2 } from "../Hero/styles"

const Delivery: React.FC = () => {
  const dispatch = useAppDispatch()

  const showDelivery = () => {
    dispatch(setAsideState(AsideState.Delivery))
  }

  return (
    <>
      <H2>Pagamento - Valor a pagar R$ 190,90</H2>
      <Form>
        <div>
          <FormLabel htmlFor="cardName">Nome no cartão</FormLabel>
          <FormInput type="text" id="cardName" name="cardName" required />
        </div>
        <FormCardInfo>
          <div>
            <FormLabel htmlFor="cardNumber">Número do cartão</FormLabel>
            <FormInput type="text" id="cardNumber" name="cardNumber" required />
          </div>
          <div>
            <FormLabel htmlFor="cvv">CVV</FormLabel>
            <FormInput type="text" id="cvv" name="cvv" required />
          </div>
        </FormCardInfo>
        <FormDate>
          <div>
            <FormLabel htmlFor="cardMonth">Mês de vencimento</FormLabel>
            <FormInput type="text" id="cardMonth" name="cardMonth" required />
          </div>
          <div>
            <FormLabel htmlFor="cardYear">Ano de vencimento</FormLabel>
            <FormInput type="text" id="cardYear" name="cardYear" required />
          </div>
        </FormDate>

        <FormTotalActions>
          <FormTotalButton>Finalizar pagamento</FormTotalButton>
          <FormTotalButton onClick={showDelivery}>
            Voltar para a edição de endereço
          </FormTotalButton>
        </FormTotalActions>
      </Form>
    </>
  )
}

export default Delivery

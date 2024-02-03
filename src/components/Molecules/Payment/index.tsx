import type React from "react"
import { useState } from "react"
import { Formik } from "formik"

import { useAppSelector } from "../../../app/hooks"
import { paymentSchema } from "../../../utils/schemas"
import { usePurchaseMutation } from "../../../utils/api"
import { getTotalPrice, parseToBrl } from "../../../utils/fn"

import { H4 } from "../../Atoms"

import {
  FormSection,
  FormLabel,
  FormInput,
  FormCardInfo,
  FormDate,
  FormTotalActions,
  FormTotalButton,
} from "./styles"
interface PaymentProps {
  prevStep: () => void
  nextStep: () => void
  formData: any
  onOrderComplete: (order: string) => void
}

const Payment: React.FC<PaymentProps> = ({
  prevStep,
  nextStep,
  formData,
  onOrderComplete,
}) => {
  const [purchase] = usePurchaseMutation()
  const pratos = useAppSelector(state => state.cart.cartList)
  const [order, setOrder] = useState<string>("")

  const handleSubmit = async (values: any) => {
    try {
      const response = await purchase({
        products: pratos.map(prato => ({
          id: prato.id,
          price: prato.preco,
        })),
        delivery: formData,
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: values.cvv,
            expires: {
              month: values.cardMonth,
              year: values.cardYear,
            },
          },
        },
      })

      if ("data" in response) {
        setOrder(response.data.orderId)
        onOrderComplete(response.data.orderId)
        nextStep()
      } else {
        console.error("Error:", response.error)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <>
      <H4>Pagamento - Valor a pagar {parseToBrl(getTotalPrice(pratos))}</H4>
      <Formik
        initialValues={{
          cardName: "",
          cardNumber: "",
          cvv: "",
          cardMonth: "",
          cardYear: "",
        }}
        validationSchema={paymentSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <FormSection>
            <div>
              <FormLabel htmlFor="cardName">Nome no cartão</FormLabel>
              <FormInput
                type="text"
                id="cardName"
                name="cardName"
                required
                value={values.cardName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <FormCardInfo>
              <div>
                <FormLabel htmlFor="cardNumber">Número do cartão</FormLabel>
                <FormInput
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  required
                  value={values.cardNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <FormLabel htmlFor="cvv">CVV</FormLabel>
                <FormInput
                  type="text"
                  id="cvv"
                  name="cvv"
                  required
                  value={values.cvv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </FormCardInfo>
            <FormDate>
              <div>
                <FormLabel htmlFor="cardMonth">Mês de vencimento</FormLabel>
                <FormInput
                  type="text"
                  id="cardMonth"
                  name="cardMonth"
                  required
                  value={values.cardMonth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <FormLabel htmlFor="cardYear">Ano de vencimento</FormLabel>
                <FormInput
                  type="text"
                  id="cardYear"
                  name="cardYear"
                  required
                  value={values.cardYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </FormDate>

            <FormTotalActions>
              <FormTotalButton type="submit">
                Finalizar pagamento
              </FormTotalButton>
              <FormTotalButton onClick={prevStep}>
                Voltar para a edição de endereço
              </FormTotalButton>
            </FormTotalActions>
          </FormSection>
        )}
      </Formik>
    </>
  )
}

export default Payment

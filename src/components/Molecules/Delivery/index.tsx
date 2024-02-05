import type React from "react"
import { Formik } from "formik"

import { useAppDispatch } from "../../../app/hooks"
import { AsideState, setAsideState } from "../../../features/aside/asideSlice"
import { deliverySchema } from "../../../utils/schemas"

import { H4, Small } from "../../Atoms"

import {
  FormSection,
  FormLabel,
  FormInput,
  FormAddress,
  FormTotalActions,
  FormTotalButton,
} from "./styles"

interface DeliveryProps {
  nextStep: () => void
  handleChange: (data: any) => void
}

const Delivery: React.FC<DeliveryProps> = ({ nextStep, handleChange }) => {
  const dispatch = useAppDispatch()

  const showCart = () => {
    dispatch(setAsideState(AsideState.Cart))
  }

  const handleSubmit = (values: any) => {
    handleChange(values)
    nextStep()
  }

  return (
    <>
      <H4>Entrega</H4>
      <Formik
        initialValues={{
          name: "",
          address: "",
          city: "",
          code: "",
          number: "",
          complement: "",
        }}
        validationSchema={deliverySchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <FormSection>
            <div>
              <FormLabel htmlFor="name">Quem irá receber</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                required
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && <Small>{errors.name}</Small>}
            </div>
            <div>
              <FormLabel htmlFor="address">Endereço</FormLabel>
              <FormInput
                type="text"
                id="address"
                name="address"
                required
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.address && errors.address && (
                <Small>{errors.address}</Small>
              )}
            </div>
            <div>
              <FormLabel htmlFor="city">Cidade</FormLabel>
              <FormInput
                type="text"
                id="city"
                name="city"
                required
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.city && errors.city && <Small>{errors.city}</Small>}
            </div>
            <FormAddress>
              <div>
                <FormLabel htmlFor="code">CEP</FormLabel>
                <FormInput
                  type="text"
                  id="code"
                  name="code"
                  required
                  value={values.code}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.code && errors.code && <Small>{errors.code}</Small>}
              </div>
              <div>
                <FormLabel htmlFor="number">Número</FormLabel>
                <FormInput
                  type="text"
                  id="number"
                  name="number"
                  required
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.number && errors.number && (
                  <Small>{errors.number}</Small>
                )}
              </div>
            </FormAddress>
            <div>
              <FormLabel htmlFor="complement">Complemento (opcional)</FormLabel>
              <FormInput
                type="text"
                id="complement"
                name="complement"
                value={values.complement}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.complement && errors.complement && (
                <Small>{errors.complement}</Small>
              )}
            </div>
            <FormTotalActions>
              <FormTotalButton type="submit">
                Continuar com o pagamento
              </FormTotalButton>
              <FormTotalButton onClick={showCart}>
                Voltar para o carrinho
              </FormTotalButton>
            </FormTotalActions>
          </FormSection>
        )}
      </Formik>
    </>
  )
}

export default Delivery

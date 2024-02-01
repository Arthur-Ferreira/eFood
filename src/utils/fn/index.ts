import { useFormikContext } from 'formik';

const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

const getTotalPrice = (pratos: ICart[]) => {
  return pratos.reduce((accumulator, current) => {
    return (accumulator += current.preco)
  }, 0)
}

const useCheckInputHasError = (fieldName: string) => {
  const { touched, errors } = useFormikContext()
  const isTouched = fieldName in touched
  const isInvalid = fieldName in errors
  const hasError = isTouched && isInvalid

  return hasError
}


export { parseToBrl, getTotalPrice, useCheckInputHasError }
import * as Yup from 'yup';

const deliverySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .required('Nome é obrigatório'),
  address: Yup.string().required('Endereço é obrigatório'),
  city: Yup.string().required('Cidade é obrigatória'),
  code: Yup.string()
    .matches(/^\d{8}$/, 'Por favor, informe um CEP válido')
    .required('CEP é obrigatório'),
  number: Yup.string().required('Número é obrigatório'),
  complement: Yup.string(),
});

const paymentSchema = Yup.object().shape({
  cardName: Yup.string().required('Nome do titular do cartão é obrigatório'),
  cardNumber: Yup.string()
    .matches(/^\d{16}$/, 'Número do cartão deve ter 16 dígitos')
    .required('Número do cartão é obrigatório'),
  cvv: Yup.string()
    .matches(/^\d{3}$/, 'CVV deve ter 3 dígitos')
    .required('Código do cartão é obrigatório'),
  cardMonth: Yup.number()
    .min(1, 'Mês de vencimento inválido')
    .max(12, 'Mês de vencimento inválido')
    .required('Mês de vencimento é obrigatório'),
  cardYear: Yup.number()
    .min(new Date().getFullYear(), 'Ano de vencimento inválido')
    .max(new Date().getFullYear() + 20, 'Ano de vencimento inválido')
    .required('Ano de vencimento é obrigatório'),
});


export { deliverySchema, paymentSchema };
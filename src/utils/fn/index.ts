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


export { parseToBrl, getTotalPrice }
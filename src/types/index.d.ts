export { }
declare global {
  interface IRestaurant {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: any[];
  }

  interface ICart {
    id: number
    nome: string
    preco: number
    foto: string
  }

  interface Prato {
    nome: string;
    descricao: string;
    foto: string;
    porcao?: string;
    preco?: number;
    id?: number;
  }

  interface Product {
    id: number
    price: number
  }

  interface PurchasePayload {
    products: Product[]
    delivery: {
      receiver: string,
      address: {
        description: string,
        city: string,
        zipCode: string,
        number: number,
        complement: string
      }
    }
    payment: {
      card: {
        name: string,
        number: string,
        code: number,
        expires: {
          month: number,
          year: number
        }
      }
    }
  }

  type PurchaseResponse = {
    orderId: string
  }
}
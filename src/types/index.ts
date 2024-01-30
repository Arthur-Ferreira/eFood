export { };

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
}
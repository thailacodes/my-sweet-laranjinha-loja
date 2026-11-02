// RF01: Representa o carrinho com pelo menos tres produtos em um array de objetos.
// RF02: O carrinho e fixo; produtos e quantidades ja ficam definidos nos dados locais.
const produtos = [
  {
    id: 1,
    nome: "Bolo de laranja",
    preco: 69.90,
    quantidade: 1,
    imagem: '/imagens/bolo-laranja.jpg'
  },
  {
    id: 2,
    nome: "Refrigerante de laranja",
    preco: 10.00,
    quantidade: 1,
    imagem: '/imagens/refrigerante.png'
  },
  {
    id: 3,
    nome: "Geleia de laranja",
    preco: 30.90,
    quantidade: 1,
    imagem: '/imagens/geleia.jpg'
  }
];

export default produtos;// Exportando a lista de produtos para uso em outros componentes.
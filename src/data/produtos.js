//Importando imagens dos produtos
import boloImg from '../assets/bolo.jpg'; 
import refrigeranteImg from '../assets/refrigerante.jpg'; 
import geleiaImg from '../assets/geleia.jpg';

// RF01: Representa o carrinho com pelo menos tres produtos em um array de objetos.
// RF02: O carrinho e fixo; produtos e quantidades ja ficam definidos nos dados locais.
const produtos = [
  {
    id: 1,
    nome: "Bolo de laranja",
    preco: 69.90,
    quantidade: 1,
    imagem: boloImg
  },
  {
    id: 2,
    nome: "Refrigerante de laranja",
    preco: 10.00,
    quantidade: 1,
    imagem: refrigeranteImg
  },
  {
    id: 3,
    nome: "Geleia de laranja",
    preco: 30.90,
    quantidade: 1,
    imagem: geleiaImg
  }
];

export default produtos;// Exportando a lista de produtos para uso em outros componentes.
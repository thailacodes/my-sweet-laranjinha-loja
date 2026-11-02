import sucessoImg from '../assets/sucesso.png';
import PaginaResultado from '../components/PaginaResultado';

// RF10: Exibe a confirmacao da compra aprovada e permite voltar ao carrinho.
function Sucesso() {
  return (
    <PaginaResultado
      variante="sucesso"
      imagem={sucessoImg}
      alt="Compra Concluída"
      titulo="Pedido Concluído!"
      descricao="Sua compra foi aprovada com sucesso."
      textoBotao="Voltar ao Carrinho"
      destinoBotao="/"
    />
  );
}

export default Sucesso;

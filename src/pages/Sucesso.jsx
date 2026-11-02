import PaginaResultado from '../components/PaginaResultado';

// Exibe a confirmação da compra aprovada e permite continuar comprando.
function Sucesso() {
  return (
    <PaginaResultado
      variante="sucesso"
      imagem="/imagens/laranjinha-feliz.gif"
      alt="Laranjinha feliz comemorando a compra aprovada"
      titulo="Compra finalizada!"
      descricao="Sua compra foi aprovada com sucesso. O carrinho foi esvaziado."
      textoBotao="Continuar comprando"
      destinoBotao="/produtos"
    />
  );
}

export default Sucesso;

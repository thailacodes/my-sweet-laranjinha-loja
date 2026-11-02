import { useEffect } from 'react';
import PaginaResultado from '../components/PaginaResultado';
import { useCarrinho } from '../hooks/useCarrinho';

// Exibe a confirmação da compra aprovada e permite continuar comprando.
function Sucesso() {
  const { limparCarrinho } = useCarrinho();

  useEffect(() => {
    // RF13: limpa o carrinho somente depois que a rota de confirmação foi montada.
    limparCarrinho();
  }, [limparCarrinho]);

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

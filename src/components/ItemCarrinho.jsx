import { useCarrinho } from '../hooks/useCarrinho';

function ItemCarrinho({ produto }) {
  const { alterarQuantidade, removerItem } = useCarrinho();
  const subtotal = produto.preco * produto.quantidade;

  return (
    <div className="item-carrinho">
      {produto.imagem && (
        <img src={produto.imagem} alt={produto.nome} className="imagem-item-carrinho" />
      )}
      
      <div className="informacoes-item-carrinho">
        <span className="titulo-item-carrinho">{produto.nome}</span>
        <span className="preco-item-carrinho">R$ {produto.preco.toFixed(2)}</span>
        <span className="subtotal-item-carrinho">Subtotal: R$ {subtotal.toFixed(2)}</span>
      </div>
      <div className="controles-quantidade">
        <button
          type="button"
          aria-label={`Diminuir quantidade de ${produto.nome}`}
          onClick={() => alterarQuantidade(produto.id, produto.quantidade - 1)}
        >
          -
        </button>
        <span className="valor-quantidade">Qtd.: {produto.quantidade}</span>
        <button
          type="button"
          aria-label={`Aumentar quantidade de ${produto.nome}`}
          onClick={() => alterarQuantidade(produto.id, produto.quantidade + 1)}
        >
          +
        </button>
        <button type="button" onClick={() => removerItem(produto.id)}>
          Remover
        </button>
      </div>
    </div>
  );
}

export default ItemCarrinho;
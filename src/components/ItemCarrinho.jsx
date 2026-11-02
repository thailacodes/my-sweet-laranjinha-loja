// RF03: Renderiza nome, preco unitario, quantidade e subtotal de cada produto.
// RF12: Componente reutilizavel que recebe o produto por props.
function ItemCarrinho({ produto }) {
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
      <span className="valor-quantidade">Qtd.: {produto.quantidade}</span>
    </div>
  );
}

export default ItemCarrinho;
import { useCallback, useMemo, useState } from 'react';
import { CarrinhoContext } from './CarrinhoContextValue';

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  // RF07: adiciona uma unidade e impede que a quantidade ultrapasse o estoque.
  const adicionarItem = useCallback((produto) => {
    setItens((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === produto.id);

      if (!itemExistente) {
        if (produto.estoque <= 0) return itensAtuais;
        return [...itensAtuais, { ...produto, quantidade: 1 }];
      }

      if (itemExistente.quantidade >= itemExistente.estoque) return itensAtuais;

      return itensAtuais.map((item) => (
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    });
  }, []);

  const alterarQuantidade = useCallback((id, quantidade) => {
    setItens((itensAtuais) => {
      const itemAtual = itensAtuais.find((item) => item.id === id);
      if (!itemAtual) return itensAtuais;

      // RF08: mantém o mínimo de uma unidade e limita o máximo ao estoque disponível.
      const quantidadeLimitada = Math.max(1, Math.min(quantidade, itemAtual.estoque));

      return itensAtuais.map((item) => {
      if (item.id !== id) return item;

      return { ...item, quantidade: quantidadeLimitada };
      });
    });
  }, []);

  const removerItem = useCallback((id) => {
    setItens((itensAtuais) => itensAtuais.filter((item) => item.id !== id));
  }, []);

  const limparCarrinho = useCallback(() => setItens([]), []);

  const obterEstoqueDisponivel = useCallback((id, estoqueTotal) => {
    const item = itens.find((itemAtual) => itemAtual.id === id);
    return Math.max(0, estoqueTotal - (item?.quantidade || 0));
  }, [itens]);

  const quantidadeTotal = useMemo(
    () => itens.reduce((total, item) => total + item.quantidade, 0),
    [itens],
  );

  const valorTotal = useMemo(
    () => itens.reduce((total, item) => total + item.preco * item.quantidade, 0),
    [itens],
  );

  const valor = useMemo(() => ({
    // RF06 e RF09: expõe operações e valores derivados para páginas e Header.
    itens,
    adicionarItem,
    alterarQuantidade,
    removerItem,
    limparCarrinho,
    quantidadeTotal,
    valorTotal,
    obterEstoqueDisponivel,
  }), [
    itens,
    adicionarItem,
    alterarQuantidade,
    removerItem,
    limparCarrinho,
    quantidadeTotal,
    valorTotal,
    obterEstoqueDisponivel,
  ]);

  return <CarrinhoContext.Provider value={valor}>{children}</CarrinhoContext.Provider>;
}
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  const adicionarItem = useCallback((produto) => {
    setItens((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === produto.id);

      if (!itemExistente) {
        return [...itensAtuais, { ...produto, quantidade: 1 }];
      }

      return itensAtuais.map((item) => (
        item.id === produto.id
          ? { ...item, quantidade: Math.min(item.quantidade + 1, item.estoque) }
          : item
      ));
    });
  }, []);

  const alterarQuantidade = useCallback((id, quantidade) => {
    setItens((itensAtuais) => itensAtuais.map((item) => {
      if (item.id !== id) return item;

      const quantidadeLimitada = Math.max(1, Math.min(quantidade, item.estoque));
      return { ...item, quantidade: quantidadeLimitada };
    }));
  }, []);

  const removerItem = useCallback((id) => {
    setItens((itensAtuais) => itensAtuais.filter((item) => item.id !== id));
  }, []);

  const limparCarrinho = useCallback(() => setItens([]), []);

  const quantidadeTotal = useMemo(
    () => itens.reduce((total, item) => total + item.quantidade, 0),
    [itens],
  );

  const valorTotal = useMemo(
    () => itens.reduce((total, item) => total + item.preco * item.quantidade, 0),
    [itens],
  );

  const valor = useMemo(() => ({
    itens,
    adicionarItem,
    alterarQuantidade,
    removerItem,
    limparCarrinho,
    quantidadeTotal,
    valorTotal,
  }), [
    itens,
    adicionarItem,
    alterarQuantidade,
    removerItem,
    limparCarrinho,
    quantidadeTotal,
    valorTotal,
  ]);

  return <CarrinhoContext.Provider value={valor}>{children}</CarrinhoContext.Provider>;
}

export function useCarrinhoContext() {
  const contexto = useContext(CarrinhoContext);

  if (!contexto) {
    throw new Error('useCarrinhoContext deve ser usado dentro de CarrinhoProvider.');
  }

  return contexto;
}
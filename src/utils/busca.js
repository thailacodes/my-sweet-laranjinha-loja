export function filtrarProdutos(produtos, termo) {
  // RF04: função pura para busca controlada, sem mutar a lista original.
  const busca = termo.trim().toLocaleLowerCase();

  if (!busca) return produtos;

  return produtos.filter((produto) =>
    produto.nome.toLocaleLowerCase().includes(busca),
  );
}

export function filtrarPorCategoria(produtos, categoria) {
  if (categoria === 'Todas') return produtos;

  return produtos.filter((produto) => produto.categoria === categoria);
}
export function filtrarProdutos(produtos, termo) {
  const busca = termo.trim().toLocaleLowerCase();

  if (!busca) return produtos;

  return produtos.filter((produto) =>
    produto.nome.toLocaleLowerCase().includes(busca),
  );
}
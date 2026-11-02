import bancoDados from '../../db.json';

const API_URL = 'http://localhost:3001';
const usarApiLocal = import.meta.env.VITE_USAR_API_LOCAL === 'true';

async function requisitar(endpoint) {
  const resposta = await fetch(`${API_URL}${endpoint}`);

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os produtos.');
  }

  return await resposta.json();
}

export async function listarProdutos() {
  if (!usarApiLocal) return bancoDados.produtos;

  return requisitar('/produtos');
}

export async function buscarProdutoPorId(id) {
  if (!usarApiLocal) {
    return bancoDados.produtos.find((produto) => String(produto.id) === String(id)) || null;
  }

  const resposta = await fetch(`${API_URL}/produtos/${id}`);

  if (resposta.status === 404) return null;
  if (!resposta.ok) throw new Error('Não foi possível carregar o produto.');

  return resposta.json();
}
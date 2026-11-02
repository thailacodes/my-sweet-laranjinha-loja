import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCarrinho } from '../hooks/useCarrinho';
import { buscarProdutoPorId } from '../services/api';
import styles from './DetalheProduto.module.css';

function DetalheProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const { adicionarItem, obterEstoqueDisponivel } = useCarrinho();

  useEffect(() => {
    async function carregarProduto() {
      try {
        setErro(false);
        setProduto(await buscarProdutoPorId(id));
      } catch {
        setErro(true);
      } finally {
        setCarregando(false);
      }
    }

    carregarProduto();
  }, [id]);

  if (carregando) return <main className="estado-pagina">Carregando produto...</main>;

  if (erro || !produto) {
    return (
      <main className="estado-pagina">
        <h1>Produto não encontrado</h1>
        <Link className={styles.voltar} to="/produtos">
          ← Voltar ao catálogo
        </Link>
      </main>
    );
  }

  const estoqueDisponivel = obterEstoqueDisponivel(produto.id, produto.estoque);

  return (
    <main className="detalhe-produto">
      <Link className={styles.voltar} to="/produtos">
        ← Voltar ao catálogo
      </Link>
      <img src={produto.imagem} alt={produto.nome} className="detalhe-imagem" />
      <span className="produto-categoria">{produto.categoria}</span>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <strong>R$ {produto.preco.toFixed(2).replace('.', ',')}</strong>
      <p>Estoque disponível: {estoqueDisponivel}</p>
      <button
        type="button"
        className="botao-finalizar"
        disabled={estoqueDisponivel === 0}
        onClick={() => adicionarItem(produto)}
      >
        {estoqueDisponivel === 0 ? 'Produto esgotado' : 'Adicionar ao carrinho'}
      </button>
    </main>
  );
}

export default DetalheProduto;
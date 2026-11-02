import { useMemo, useState } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import { useProdutos } from '../hooks/useProdutos';
import { filtrarProdutos } from '../utils/busca';
import { useCarrinho } from '../hooks/useCarrinho';

function Produtos() {
  const [termo, setTermo] = useState('');
  const { produtos, carregando, erro } = useProdutos();
  const { adicionarItem } = useCarrinho();

  const produtosFiltrados = useMemo(
    () => filtrarProdutos(produtos, termo),
    [produtos, termo],
  );

  return (
    <main className="catalogo">
      <header className="catalogo-cabecalho">
        <p className="eyebrow">My Sweet Laranjinha</p>
        <h1>Produtos</h1>
        <label htmlFor="busca-produtos">Buscar produto</label>
        <input
          id="busca-produtos"
          type="search"
          value={termo}
          onChange={(evento) => setTermo(evento.target.value)}
          placeholder="Digite o nome do produto"
        />
      </header>

      {carregando && <p className="estado-pagina">Carregando produtos...</p>}
      {erro && <p className="estado-pagina estado-erro">{erro}</p>}
      {!carregando && !erro && produtos.length === 0 && (
        <p className="estado-pagina">Nenhum produto disponível.</p>
      )}
      {!carregando && !erro && produtos.length > 0 && produtosFiltrados.length === 0 && (
        <div className="estado-pagina">
          <p>Nenhum produto encontrado.</p>
          <button type="button" onClick={() => setTermo('')}>
            Limpar busca
          </button>
        </div>
      )}
      {!carregando && !erro && produtosFiltrados.length > 0 && (
        <section className="grade-produtos" aria-label="Lista de produtos">
          {produtosFiltrados.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} onAdicionar={adicionarItem} />
          ))}
        </section>
      )}
    </main>
  );
}

export default Produtos;
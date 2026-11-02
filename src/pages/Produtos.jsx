import { useMemo, useState } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import { useProdutos } from '../hooks/useProdutos';
import { filtrarPorCategoria, filtrarProdutos } from '../utils/busca';
import { useCarrinho } from '../hooks/useCarrinho';

function Produtos() {
  const [termo, setTermo] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const { produtos, carregando, erro } = useProdutos();
  const { adicionarItem } = useCarrinho();

  // RF04: as categorias são derivadas dos produtos recebidos, sem duplicar dados no estado.
  const categorias = useMemo(
    () => ['Todas', ...new Set(produtos.map((produto) => produto.categoria))],
    [produtos],
  );

  const produtosFiltrados = useMemo(
    // A filtragem permanece em funções puras e só é recalculada quando seus dados mudam.
    () => filtrarPorCategoria(filtrarProdutos(produtos, termo), categoriaSelecionada),
    [produtos, termo, categoriaSelecionada],
  );

  const limparFiltros = () => {
    setTermo('');
    setCategoriaSelecionada('Todas');
  };

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
        <div className="filtros-categoria" aria-label="Filtrar por categoria">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={categoria === categoriaSelecionada ? 'filtro-ativo' : ''}
              aria-pressed={categoria === categoriaSelecionada}
              onClick={() => setCategoriaSelecionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </header>

      {carregando && <p className="estado-pagina">Carregando produtos...</p>}
      {erro && <p className="estado-pagina estado-erro">{erro}</p>}
      {!carregando && !erro && produtos.length === 0 && (
        <p className="estado-pagina">Nenhum produto disponível.</p>
      )}
      {!carregando && !erro && produtos.length > 0 && produtosFiltrados.length === 0 && (
        <div className="estado-pagina">
          <p>Nenhum produto encontrado.</p>
          <button type="button" onClick={limparFiltros}>
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
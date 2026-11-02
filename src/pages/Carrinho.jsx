import { Link } from 'react-router-dom';
import ItemCarrinho from '../components/ItemCarrinho';
import ResumoCompra from '../components/ResumoCompra';
import { useCarrinho } from '../hooks/useCarrinho';
import tristeImg from '../assets/triste.png';
import styles from './Carrinho.module.css';

function Carrinho() {
  const { itens } = useCarrinho();

  return (
    <main>
      <h2>Meu Carrinho</h2>

      {itens.length === 0 ? (
        <div className={styles.vazio}>
          <img src={tristeImg} alt="Carrinho Vazio" className={styles.imagem} />
          <p>Seu carrinho está vazio!</p>
          <Link className={styles.botaoProdutos} to="/produtos">
            Ver produtos
          </Link>
        </div>
      ) : (
        <>
          {/* RF03: Renderiza a lista usando map e uma key estavel para cada produto. */}
          <div className="lista-carrinho">
            {itens.map((item) => (
              <ItemCarrinho key={item.id} produto={item} />
            ))}
          </div>
          <ResumoCompra produtos={itens} />
        </>
      )}
    </main>
  );
}

export default Carrinho;
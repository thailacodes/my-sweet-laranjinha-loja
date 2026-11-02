import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatarMoeda } from '../utils/moeda';
import styles from './ProdutoCard.module.css';

function ProdutoCard({ produto, onAdicionar }) {
  return (
    <article className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
      <div className={styles.conteudo}>
        <span className={styles.categoria}>{produto.categoria}</span>
        <h2 className={styles.nome}>{produto.nome}</h2>
        <strong className={styles.preco}>{formatarMoeda(produto.preco)}</strong>
        <div className={styles.acoes}>
          <Link className={styles.detalhe} to={`/produtos/${produto.id}`}>
            Ver detalhes
          </Link>
          <button className={styles.botao} type="button" onClick={() => onAdicionar(produto)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </article>
  );
}

ProdutoCard.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nome: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
  onAdicionar: PropTypes.func,
};

ProdutoCard.defaultProps = {
  onAdicionar: () => {},
};

export default ProdutoCard;
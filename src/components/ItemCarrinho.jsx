import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useCarrinho } from '../hooks/useCarrinho';
import { formatarMoeda } from '../utils/moeda';
import styles from './ItemCarrinho.module.css';

function ItemCarrinho({ produto }) {
  const { alterarQuantidade, removerItem } = useCarrinho();
  const subtotal = produto.preco * produto.quantidade;

  return (
    <article className={styles.item}>
      {produto.imagem && (
        <img src={produto.imagem} alt={produto.nome} className={styles.imagem} />
      )}
      
      <div className={styles.informacoes}>
        <span className={styles.titulo}>{produto.nome}</span>
        <span className={styles.preco}>{formatarMoeda(produto.preco)}</span>
        <span className={styles.subtotal}>Subtotal: {formatarMoeda(subtotal)}</span>
      </div>
      <div className={styles.controles}>
        <Button
          className={styles.controle}
          size="small"
          variant="contained"
          aria-label="Diminuir quantidade"
          onClick={() => alterarQuantidade(produto.id, produto.quantidade - 1)}
        >
          -
        </Button>
        <span className={styles.quantidade} aria-label={`Quantidade: ${produto.quantidade}`}>
          {produto.quantidade}
        </span>
        <Button
          className={styles.controle}
          size="small"
          variant="contained"
          aria-label="Aumentar quantidade"
          onClick={() => alterarQuantidade(produto.id, produto.quantidade + 1)}
        >
          +
        </Button>
        <Button size="small" color="error" onClick={() => removerItem(produto.id)}>
          Remover
        </Button>
      </div>
    </article>
  );
}

ItemCarrinho.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
    imagem: PropTypes.string,
  }).isRequired,
};

export default ItemCarrinho;
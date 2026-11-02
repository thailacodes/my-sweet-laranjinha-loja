import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PaginaResultado.module.css';

// RF12: Componente reutilizavel que renderiza o layout comum das telas de
// resultado (sucesso e falha), deixando cada pagina responsavel apenas pelos dados.
function PaginaResultado({
  variante,
  imagem,
  alt,
  titulo,
  descricao,
  textoBotao,
  destinoBotao
}) {
  return (
    <main className={`pop-up-resultado pop-up-${variante}`}>
      <img className={styles.imagemResultado} src={imagem} alt={alt} />

      <h1>{titulo}</h1>
      <p style={{ color: '#6e6e73', marginBottom: '20px' }}>{descricao}</p>

      <Link className="botao-acao" to={destinoBotao}>
        {textoBotao}
      </Link>
    </main>
  );
}

PaginaResultado.propTypes = {
  variante: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  textoBotao: PropTypes.string.isRequired,
  destinoBotao: PropTypes.string.isRequired,
};

export default PaginaResultado;

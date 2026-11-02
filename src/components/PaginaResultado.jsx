import { Link } from 'react-router-dom';

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
      <img src={imagem} alt={alt} />

      <h1>{titulo}</h1>
      <p style={{ color: '#6e6e73', marginBottom: '20px' }}>{descricao}</p>

      <Link className="botao-acao" to={destinoBotao}>
        {textoBotao}
      </Link>
    </main>
  );
}

export default PaginaResultado;

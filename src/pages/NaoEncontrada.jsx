import { Link } from 'react-router-dom';

function NaoEncontrada() {
  return (
    <main className="estado-pagina">
      <h1>Página não encontrada</h1>
      <p>O endereço informado não existe.</p>
      <Link className="botao-acao" to="/produtos">
        Voltar ao catálogo
      </Link>
    </main>
  );
}

export default NaoEncontrada;
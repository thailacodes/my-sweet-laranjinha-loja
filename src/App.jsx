import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Carrinho from './pages/Carrinho';
import DetalheProduto from './pages/DetalheProduto';
import Produtos from './pages/Produtos';
import Pagamento from './pages/Pagamento';
import Sucesso from './pages/Sucesso';
import Falha from './pages/Falha';
import NaoEncontrada from './pages/NaoEncontrada';

//Função aplicativo que chama as rotas para cada página do aplicativo.
// As rotas definem qual componente será renderizado para cada caminho da URL. Os componentes são
//  os que foram importados no início do arquivo as páginas carrinho, pagamento, sucesso e falha.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/produtos" replace />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<DetalheProduto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/sucesso" element={<Sucesso />} />
          <Route path="/falha" element={<Falha />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Organizando o roteamento do aplicativo
import Carrinho from './pages/Carrinho'; //link que liga o app ao arquivo carrinho
import Pagamento from './pages/Pagamento'; //link que liga o app ao arquivo pagamento
import Sucesso from './pages/Sucesso'; //link que liga o app ao arquivo sucesso
import Falha from './pages/Falha'; //link que liga o app ao arquivo falha

//Função aplicativo que chama as rotas para cada página do aplicativo.
// As rotas definem qual componente será renderizado para cada caminho da URL. Os componentes são
//  os que foram importados no início do arquivo as páginas carrinho, pagamento, sucesso e falha.
function App() {
  return (
    <BrowserRouter>
      {/* RF12: Separa as quatro paginas e os componentes reutilizaveis do fluxo. */}
      <Routes>
        <Route path="/" element={<Carrinho />} />  {/* Aqui é a rota para a página do carrinho */}
        <Route path="/pagamento" element={<Pagamento />} />  {/* Aqui é a rota para a página de pagamento */}
        <Route path="/sucesso" element={<Sucesso />} />  {/* Aqui é a rota para a página de sucesso */}
        <Route path="/falha" element={<Falha />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App; {/* Aqui exporta a função App como o componente principal do aplicativo */}
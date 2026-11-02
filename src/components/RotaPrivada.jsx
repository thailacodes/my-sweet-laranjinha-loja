import { Navigate, Outlet } from 'react-router-dom';
import { useCarrinho } from '../hooks/useCarrinho';

function RotaPrivada() {
  const { itens } = useCarrinho();

  return itens.length > 0 ? <Outlet /> : <Navigate to="/carrinho" replace />;
}

export default RotaPrivada;
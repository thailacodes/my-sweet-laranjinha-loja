import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarrinho } from './useCarrinho';
import { verificarDigitosIguais } from '../utils/pagamento';

export function usePagamento() {
  const [processando, setProcessando] = useState(false);
  const navigate = useNavigate();
  const { limparCarrinho } = useCarrinho();

  // RF13: Custom hook que organiza a logica reutilizavel do pagamento.
  const processarCompra = async (dadosCartao) => {
    // RF08: Simula o processamento, mostra a mensagem e evita envios duplicados.
    setProcessando(true);
    
    // Simula uma operação assíncrona (1,5 segundos aguardando)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // RF07: Cartao com os 16 digitos iguais representa uma tentativa de golpe.
    const eGolpe = verificarDigitosIguais(dadosCartao.numeroCartao);

    setProcessando(false);

    // RF09: Navega para sucesso ou falha depois da simulacao.
    if (eGolpe) {
      navigate('/falha');
    } else {
      limparCarrinho();
      navigate('/sucesso');
    }
  };

  return { processarCompra, processando };
}
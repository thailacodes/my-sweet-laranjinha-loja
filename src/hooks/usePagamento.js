import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verificarDigitosIguais } from '../utils/pagamento';

export function usePagamento() {
  const [processando, setProcessando] = useState(false);
  const navigate = useNavigate();

  // RF10 e RF11: concentra o processamento assíncrono e a navegação do checkout.
  const processarCompra = async (dadosCartao) => {
    // Mantém o estado de processamento para exibir feedback e desabilitar o envio.
    setProcessando(true);
    
    // Simula uma operação assíncrona no navegador, sem back-end de pagamento.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // RF11: cartão com os 16 dígitos iguais representa uma tentativa de golpe.
    const eGolpe = verificarDigitosIguais(dadosCartao.numeroCartao);

    setProcessando(false);

    // RF13: sucesso limpa o carrinho; falha mantém os itens para nova tentativa.
    if (eGolpe) {
      navigate('/falha');
    } else {
      // A página de sucesso limpa o carrinho depois que a confirmação é exibida.
      navigate('/sucesso');
    }
  };

  return { processarCompra, processando };
}
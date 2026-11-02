import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { usePagamento } from '../hooks/usePagamento';
import { useCarrinho } from '../hooks/useCarrinho';

// RF06: Valida titular, cartao com 16 digitos, validade MM/AA e CVV com 3 digitos.
const esquemaPagamento = z.object({
  titular: z.string().min(1, 'Nome do titular é obrigatório'),
  numeroCartao: z.string().refine((val) => {
    const limpo = val.replace(/[\s-]/g, '');
    return limpo.length === 16 && /^\d+$/.test(limpo);
  }, 'Número do cartão deve ter exatamente 16 dígitos'),

  validade: z.string().refine((val) => {
    if (!/^\d{2}\/\d{2}$/.test(val)) return false;
    const mes = parseInt(val.substring(0, 2), 10);
    return mes >= 1 && mes <= 12;
  }, 'Validade deve estar no formato MM/AA com mês entre 01 e 12'),
  cvv: z.string().regex(/^\d{3}$/, 'CVV deve ter exatamente 3 dígitos'),
});

function Pagamento() {
  const { processarCompra, processando } = usePagamento();
  const { valorTotal } = useCarrinho();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(esquemaPagamento),
  });

  const aoSubmeter = (dados) => {
    processarCompra(dados);
  };

  return (
  <main>
    <Link className="link-voltar" to="/carrinho">← Voltar ao Carrinho</Link>
      <h1 className="page-title">Pagamento</h1>
      <p className="payment-total">Total da compra: R$ {valorTotal.toFixed(2).replace('.', ',')}</p>
      {/* RF05: Formulario usado para finalizar a compra simulada. */}
      <form onSubmit={handleSubmit(aoSubmeter)}>
        <div className="form-field">
          <label htmlFor="titular">Nome do titular</label>
          <input id="titular" type="text" {...register('titular')} />
          {errors.titular && <span className="error-message">{errors.titular.message}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="numeroCartao">Número do cartão</label>
          <input id="numeroCartao" type="text" inputMode="numeric" {...register('numeroCartao')} />
          {errors.numeroCartao && <span className="error-message">{errors.numeroCartao.message}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="validade">Validade (MM/AA)</label>
          <input id="validade" type="text" inputMode="numeric" {...register('validade')} />
          {errors.validade && <span className="error-message">{errors.validade.message}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" type="text" inputMode="numeric" {...register('cvv')} />
          {errors.cvv && <span className="error-message">{errors.cvv.message}</span>}
        </div>
        <button className="botao-finalizar" type="submit" disabled={processando}>
          {processando ? 'Processando compra...' : 'Pagar'}
        </button>
      </form>
    </main>
  );
}

export default Pagamento;
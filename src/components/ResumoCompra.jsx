import { Link } from 'react-router-dom'; // Tela de resumo do carrinho, importando o componente Link: para fluxo da página.

// RF03: Calcula o total da compra a partir dos precos e quantidades do array.
// RF12: Componente reutilizavel que recebe a lista de produtos por props.
function ResumoCompra({ produtos = [] }) {
  const total = (produtos || []).reduce(
    (acc, prod) => acc + (prod.preco || 0) * (prod.quantidade || 0),
    0
  );

  return (
    <div style={{ marginTop: '24px' }}>
      <div
        style={{
          background: '#F2F2F7',
          borderRadius: '12px',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}
      >
        <span style={{ fontWeight: '600', color: '#4A4A4A' }}>
          Total
        </span>

        <span
          style={{
            fontWeight: '700',
            fontSize: '1.2rem',
            color: '#1A1A1A'
          }}
        >
          R$ {total.toFixed(2)}
        </span>
      </div>

      {/* RF04: Leva o usuario do carrinho para a tela de pagamento. */}
      <Link
        className="botao-finalizar"
        to="/pagamento"
        aria-disabled={produtos.length === 0}
        style={{ textDecoration: 'none' }}
      >
        Finalizar compra
      </Link>
    </div>
  );
}

export default ResumoCompra;
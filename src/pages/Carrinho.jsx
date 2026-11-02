import produtos from '../data/produtos';
import ItemCarrinho from '../components/ItemCarrinho';
import ResumoCompra from '../components/ResumoCompra';
import tristeImg from '../assets/triste.png';
import logoImg from '../assets/mysweetlogo.png';

function Carrinho() {
  return (
    <main>
      <img src={logoImg} alt="My Sweet Laranjinha" className="brand-logo" />
      <h2>Meu Carrinho</h2>

      {produtos.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <img 
            src={tristeImg} 
            alt="Carrinho Vazio" 
            style={{ width: '150px', margin: '0 auto 16px', display: 'block' }} 
          />
          <p>Seu carrinho está vazio!</p>
        </div>
      ) : (
        <>
          {/* RF03: Renderiza a lista usando map e uma key estavel para cada produto. */}
          <div className="lista-carrinho">
            {produtos.map((produto) => (
              <ItemCarrinho key={produto.id} produto={produto} />
            ))}
          </div>
          <ResumoCompra produtos={produtos} />
        </>
      )}
    </main>
  );
}

export default Carrinho;
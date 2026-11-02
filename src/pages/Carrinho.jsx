import ItemCarrinho from '../components/ItemCarrinho';
import ResumoCompra from '../components/ResumoCompra';
import { useCarrinho } from '../hooks/useCarrinho';
import tristeImg from '../assets/triste.png';

function Carrinho() {
  const { itens } = useCarrinho();

  return (
    <main>
      <h2>Meu Carrinho</h2>

      {itens.length === 0 ? (
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
            {itens.map((item) => (
              <ItemCarrinho key={item.id} produto={item} />
            ))}
          </div>
          <ResumoCompra produtos={itens} />
        </>
      )}
    </main>
  );
}

export default Carrinho;
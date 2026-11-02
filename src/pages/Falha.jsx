import golpeImg from '../assets/golpe.png';
import PaginaResultado from '../components/PaginaResultado';

// RF11: Exibe a mensagem exata de tentativa de golpe e permite tentar novamente.
function Falha() {
  return (
    <PaginaResultado
      variante="falha"
      imagem={golpeImg}
      alt="Tentativa de Golpe"
      titulo="tentativa de golpe"
      descricao="Sua transação foi bloqueada por suspeita de fraude."
      textoBotao="Tentar novamente"
      destinoBotao="/pagamento"
    />
  );
}

export default Falha;

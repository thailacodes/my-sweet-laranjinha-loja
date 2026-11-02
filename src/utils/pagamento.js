export function verificarDigitosIguais(numeroCartao) {
  // RF07: Remove espacos e hifens e verifica se os 16 digitos sao iguais.
  const limpo = numeroCartao.replace(/[\s-]/g, '');
  
  // Se não tiver 16 dígitos, ignora
  if (limpo.length !== 16) return false;

  // Verifica se todos os caracteres são iguais ao primeiro
  return limpo.split('').every(char => char === limpo[0]);
}
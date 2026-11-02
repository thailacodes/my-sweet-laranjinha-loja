export function verificarDigitosIguais(numeroCartao) {
  // RF11: remove espaços e hífens para identificar o cartão de teste de fraude.
  const limpo = numeroCartao.replace(/[\s-]/g, '');
  
  // A validação do formulário cuida do formato; esta regra só identifica os dígitos iguais.
  if (limpo.length !== 16) return false;

  // RF11: todos os caracteres devem ser iguais ao primeiro dígito.
  return limpo.split('').every(char => char === limpo[0]);
}
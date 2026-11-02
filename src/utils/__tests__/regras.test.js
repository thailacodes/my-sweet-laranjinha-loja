import { describe, expect, it } from 'vitest';
import { filtrarPorCategoria, filtrarProdutos } from '../busca';
import { formatarMoeda } from '../moeda';
import { verificarDigitosIguais } from '../pagamento';

const produtos = [
  { id: '1', nome: 'Bolo de Laranja', categoria: 'Sobremesas' },
  { id: '2', nome: 'Suco de Laranja', categoria: 'Bebidas' },
];

describe('regras de produtos', () => {
  it('filtra produtos por nome sem diferenciar maiúsculas', () => {
    expect(filtrarProdutos(produtos, 'bolo')).toEqual([produtos[0]]);
    expect(filtrarProdutos(produtos, '')).toEqual(produtos);
  });

  it('filtra produtos por categoria e retorna todos em Todas', () => {
    expect(filtrarPorCategoria(produtos, 'Bebidas')).toEqual([produtos[1]]);
    expect(filtrarPorCategoria(produtos, 'Todas')).toEqual(produtos);
  });
});

describe('regras de pagamento e moeda', () => {
  it('formata valores em reais', () => {
    expect(formatarMoeda(69.9).replace(/\s/, ' ')).toBe('R$ 69,90');
  });

  it('identifica cartão com dígitos iguais e rejeita cartão comum', () => {
    expect(verificarDigitosIguais('1111 1111-1111 1111')).toBe(true);
    expect(verificarDigitosIguais('1234567812345678')).toBe(false);
  });
});

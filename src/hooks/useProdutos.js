import { useEffect, useState } from 'react';
import { listarProdutos } from '../services/api';

export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  // RF02: carrega o catálogo uma vez e mantém estados distintos para carregamento e erro.
  useEffect(() => {
    async function carregarProdutos() {
      try {
        setErro('');
        setProdutos(await listarProdutos());
      } catch {
        setErro('Não foi possível carregar os produtos. Verifique se a API está em execução.');
      } finally {
        setCarregando(false);
      }
    }

    carregarProdutos();
  }, []);

  return { produtos, carregando, erro };
}
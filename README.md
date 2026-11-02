# My Sweet Laranjinha

## Objetivo

O projeto My Sweet Laranjinha é uma loja virtual feita com React e Vite. Nela, o cliente navega pelo catálogo, busca produtos, monta o carrinho e simula o pagamento.

## Como executar

1. Clone o repositório e abra o projeto no VS Code.
2. Instale as dependências com `npm install`.
3. Em um terminal, inicie a API simulada com `npm run api` (porta 3001).
4. Em outro terminal, inicie a aplicação com `npm run dev`.
5. Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

Para rodar os testes: `npm run test`.
Para gerar a versão de produção: `npm run build`.

### Variável de ambiente

Crie o arquivo `.env.local` na raiz do projeto:

```env
VITE_USAR_API_LOCAL=true
```

- `true`: carrega os produtos pelo JSON Server (`http://localhost:3001`).
- Qualquer outro valor: usa os dados direto do `db.json`, útil no deploy sem API local.

## O que o projeto faz

- Exibe um catálogo com 15 produtos carregados da API `/produtos`;
- Pesquisa produtos por nome e filtra por categoria (Sobremesas, Snacks, Bebidas e Merch);
- Mostra a página de detalhes de cada produto em `/produtos/:id`;
- Permite adicionar, remover e alterar a quantidade dos itens no carrinho, respeitando o estoque;
- Calcula subtotal, total e mostra a quantidade de itens no Header;
- Protege a rota `/pagamento`, acessível apenas com itens no carrinho;
- Valida o formulário de pagamento (titular, cartão de 16 dígitos, validade `MM/AA` e CVV de 3 dígitos);
- Simula a compra: cartão comum vai para `/sucesso` e limpa o carrinho; cartão com todos os dígitos iguais vai para `/falha` com a mensagem `tentativa de golpe`, mantendo os itens;
- Exibe uma página 404 para rotas inexistentes.

### Cartões para teste

- Compra aprovada: `1234567812345678`
- Tentativa de golpe: `1111111111111111`

## Tecnologias utilizadas

- React
- JavaScript e JSX
- Vite
- React Router DOM
- Context API e hooks customizados
- CSS Modules
- Material UI
- React Hook Form
- Zod
- JSON Server
- PropTypes
- Vitest

## Estrutura do projeto

```text
src/
├── components/   # Header, Footer, Layout, cards e itens reutilizáveis
├── contexts/     # Estado global do carrinho
├── hooks/        # Hooks de produtos, carrinho e pagamento
├── pages/        # Catálogo, carrinho, pagamento e resultados
├── services/     # Comunicação com a API de produtos
├── utils/        # Regras de busca, moeda e pagamento
└── assets/       # Imagens usadas pela aplicação

db.json           # Banco de dados da API simulada
```

## Melhorias futuras

- Ordenação por preço combinada com o filtro por categoria;
- Busca sincronizada com a URL;
- Carrinho persistente com `localStorage`;
- Tema claro/escuro;
- Testes de componentes com React Testing Library.

## Status

Projeto funcional.

## Autora

Thaila Campoy

Este README foi criado com auxílio das IAs Claude e Gemini.

## Links

- Aplicação publicada: COLE_AQUI_O_LINK_DO_DEPLOY
- Trello: https://trello.com/invite/b/6ae261820b26777a62bba1a4/ATTI85df181450f1c0b5cdf019004cab4ad71F2C5CA4/projeto-final-front-end-t2-sctec
- GitHub: https://github.com/thailacodes/my-sweet-laranjinha-loja


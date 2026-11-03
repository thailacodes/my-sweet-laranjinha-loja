# My Sweet Laranjinha

Loja virtual criada com React e Vite. A aplicação possui catálogo de produtos, busca, carrinho e checkout simulado.

## Como executar

```bash
npm install
npm run api
```

Em outro terminal, execute:

```bash
npm run dev
```

Acesse o endereço informado pelo Vite, normalmente `http://localhost:5173`.

Para verificar o projeto:

```bash
npm run test
npm run build
```

O comando `npm run api` inicia o JSON Server na porta `3001`. No deploy, os produtos são carregados diretamente do arquivo `db.json`.

## Funcionalidades

- Catálogo com produtos, categorias e busca;
- Página de detalhes dos produtos;
- Carrinho com alteração de quantidade, estoque, subtotal e total;
- Contador de itens no cabeçalho;
- Checkout com React Hook Form e Zod;
- Tela de sucesso e tela de falha;
- Rotas protegidas e página 404;
- Interface responsiva.

## Cartões para teste

- Compra aprovada: `1234567812345678`
- Tentativa de golpe: `1111111111111111`

## Tecnologias

React, Vite, React Router DOM, Context API, CSS Modules, Material UI, React Hook Form, Zod, JSON Server e Vitest.

## Links

- Aplicação: https://mysweetlaranjinhastore.netlify.app/produtos
- GitHub: https://github.com/thailacodes/my-sweet-laranjinha-loja
- Trello: https://trello.com/invite/b/6ae261820b26777a62bba1a4/ATTI85df181450f1c0b5cdf019004cab4ad71F2C5CA4/projeto-final-front-end-t2-sctec

## Autora

Thaila Campoy

## Agradecimentos

Agradeço de coração por todo ensinamento do Prof. Eduardo. Foi uma experiência incrível com os professores durante esses meses de aprendizagem. Sentirei saudades.

Este projeto foi realizado com auxílio das IAs Claude e Gemini.
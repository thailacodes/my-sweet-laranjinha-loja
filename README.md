# My Sweet Laranjinha

Esse projeto é uma simulação de uma loja de produtos feitos com laranja. Eu criei o My Sweet Laranjinha para mostrar o fluxo desde o carrinho até o pagamento. O usuário escolhe finalizar a compra, preenche os dados fictícios do cartão e recebe uma resposta informando se a compra foi aprovada ou bloqueada como tentativa de golpe.

## Como executar

1. Instale as dependências com `npm install`.
2. Inicie a aplicação com `npm run dev`.
3. Abra o endereço informado pelo Vite no navegador.
4. Confira os produtos e clique em **Finalizar compra**.
5. Preencha o formulário de pagamento.

## Cartões de teste

### Compra aprovada

Use o cartão `1234567812345678` para acessar a tela de sucesso com a laranjinha comemorando.

### Tentativa de golpe

Use o cartão `1111111111111111` para bloquear a transação e exibir o alerta de segurança da laranjinha brava.

## O que o projeto faz

Na primeira tela, o usuário consegue ver os produtos, as imagens, as quantidades, os subtotais e o valor total. Depois, pode ir para a tela de pagamento e preencher o nome, o número do cartão, a validade e o CVV.

O pagamento é apenas uma simulação. O sistema mostra uma mensagem de processamento e depois verifica o número informado. Um cartão comum vai para a tela de sucesso. Quando os 16 dígitos são iguais, a compra é bloqueada e aparece o alerta de tentativa de golpe.

O carrinho é fixo, conforme o enunciado do projeto. Os produtos e quantidades já ficam definidos no array local, por isso não há adição, remoção ou alteração de itens.

## Tecnologias utilizadas

- React
- JavaScript e JSX
- Vite
- React Router
- React Hook Form
- Zod
- CSS

## Estrutura do projeto

- `src/assets/` - imagens dos produtos, resultados e logo
- `src/components/` - itens e resumo do carrinho
- `src/data/` - dados dos produtos
- `src/hooks/` - processamento do pagamento
- `src/pages/` - telas do carrinho, pagamento, sucesso e falha
- `src/utils/` - regra dos dígitos iguais

## Referência de estudo

Antes de iniciar o projeto, assisti a uma videoaula de React para iniciantes no YouTube, do canal Programação Web:

[Videoaula de React para iniciantes](https://youtu.be/hd2B7XQAFls?is=BMmPWsVPdv8jsEJ8)

## Uso de inteligência artificial

Utilizei a Gemini para me orientar na criação das pastas, na organização das etapas e no fluxo entre as páginas. Revisei e testei as sugestões, adaptando o código ao projeto.

As imagens e a logo da identidade visual foram feitas por mim, utilizando o aplicativo Figma. As imagens dos produtos e logo laranjas foram criadas com ajuda de IA.

## Melhorias futuras

- Adicionar testes automatizados para o formulário e os fluxos de pagamento.
- Criar um carrinho dinâmico com alteração de quantidade e remoção de produtos.
- Melhorar a persistência dos dados do carrinho.
- Adicionar mais produtos e uma tela de catálogo.

## Observação

Prof. Eduardo, me desculpe por não fazer o vídeo desta vez e nem o Trello. Tentei fazer o projeto, pois esta semana foi muito corrida e não quis ficar sem entregar.



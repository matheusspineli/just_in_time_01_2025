# Just in Time

Sistema web para **controle de estoque e produção sob demanda (Just in Time)**, desenvolvido com Node.js/Express no backend e HTML, CSS e JavaScript puro no frontend.

A aplicação permite cadastrar produtos, gerenciar usuários com login autenticado via JWT e registrar movimentações de produção, atualizando o estoque automaticamente e alertando quando o estoque fica abaixo do mínimo definido.

---

## Índice

- [Visão geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Modelo de dados](#modelo-de-dados)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Screenshots](#screenshots)

---

## Visão geral

A aplicação foi desenvolvida para pequenos processos produtivos que trabalham no modelo **Just in Time**.

Cada produto possui uma quantidade em estoque e um estoque mínimo.

Toda entrada, realizada por meio de fabricação, ou saída, realizada por meio de pedido, é registrada como uma movimentação.

Ao registrar uma movimentação, o estoque do produto é atualizado automaticamente.

---

## Funcionalidades

### Usuários

- Cadastro de usuários
- Listagem de usuários
- Busca de usuário
- Atualização de usuário
- Exclusão de usuário

### Autenticação

- Login
- Geração de token JWT
- Consulta do usuário autenticado
- Logout

### Produtos

- Cadastro de produtos
- Listagem de produtos
- Busca de produtos
- Atualização de produtos
- Exclusão de produtos
- Controle de estoque
- Controle de estoque mínimo
- Bloqueio de exclusão de produtos com movimentações

### Produção

- Cadastro de movimentações
- Movimentação de fabricação
- Movimentação de pedidos
- Entrada automática no estoque
- Saída automática do estoque
- Validação do estoque disponível
- Alerta de estoque abaixo do mínimo
- Listagem de movimentações
- Busca de movimentações
- Atualização de movimentações
- Exclusão de movimentações

---

## Modelo de dados

O sistema possui três entidades principais:

- `Usuario`
- `Produto`
- `Producao`

A entidade `Producao` possui relacionamento com `Usuario` e `Produto`.

### Diagrama Entidade-Relacionamento

![Diagrama Entidade-Relacionamento](assets/der.png)

---

## Tecnologias

### Backend

- Node.js
- Express
- Prisma ORM
- MySQL/MariaDB
- JSON Web Token (JWT)
- CORS
- dotenv

### Frontend

- HTML5
- CSS3
- JavaScript puro

### Testes

- Insomnia

---

## Estrutura do projeto

```text
justi_in_time/
│
├── assets/
│   ├── der.png
│   ├── usuario-cadastrar.png
│   ├── usuario-listar.png
│   ├── usuario-buscar.png
│   ├── usuario-atualizar.png
│   ├── usuario-excluir.png
│   ├── produto-cadastrar.png
│   ├── produto-buscar.png
│   ├── produto-atualizar.png
│   ├── produto-excluir.png
│   ├── producao-listar.png
│   ├── producao-buscar.png
│   ├── producao-cadastrar.png
│   └── producao-excluir.png
│
├── backend/
│   └── api/
│       ├── prisma/
│       ├── src/
│       │   ├── controllers/
│       │   ├── middleware/
│       │   ├── routes/
│       │   └── data/
│       ├── insomnia.json
│       └── server.js
│
└── frontend/
    ├── index.html
    ├── principal.html
    ├── produtos.html
    ├── producao.html
    └── style.css

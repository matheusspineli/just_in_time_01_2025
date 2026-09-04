# Just in Time

Sistema web para **controle de estoque e produção sob demanda (Just in Time)**, desenvolvido com Node.js/Express no backend e HTML, CSS e JavaScript puro no frontend. A aplicação permite cadastrar produtos, gerenciar usuários com login autenticado via JWT e registrar movimentações de produção (fabricação e pedidos), atualizando o estoque automaticamente e alertando quando ele fica abaixo do mínimo definido.

## Índice

- [Visão geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Modelo de dados](#modelo-de-dados)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Screenshots](#screenshots)

## Visão geral

A aplicação foi pensada para pequenos processos produtivos que trabalham no modelo Just in Time: cada produto tem uma quantidade em estoque e um estoque mínimo, e toda entrada (fabricação) ou saída (pedido) de itens é registrada como uma movimentação de produção associada a um usuário. Ao registrar uma movimentação, o sistema recalcula o estoque do produto automaticamente e sinaliza quando ele cai abaixo do mínimo configurado.

## Funcionalidades

- **Usuários**: cadastro, listagem, busca, atualização e exclusão de usuários.
- **Autenticação**: login com geração de token JWT, consulta do usuário logado e logout.
- **Produtos**: cadastro com nome, descrição, custo, quantidade em estoque e estoque mínimo, além de listagem, busca, atualização e exclusão (com bloqueio de exclusão para produtos que já possuem movimentações).
- **Produção**: registro de movimentações do tipo `fabricado` (entrada) ou `pedido` (saída), com validação de estoque disponível, atualização automática do estoque do produto e alerta de estoque abaixo do mínimo.
- **Frontend**: telas de login, página principal, cadastro de produtos e gestão de produção.

## Modelo de dados

O banco relaciona três entidades principais — `Usuario`, `Produto` e `Producao` — onde cada movimentação de produção pertence a um usuário e a um produto:

![Diagrama entidade-relacionamento](assets/Captura%20de%20tela%202026-09-04%20073940.png)

## Tecnologias

**Backend**
- Node.js + Express
- Prisma ORM (adapter MariaDB/MySQL)
- JSON Web Token (JWT) para autenticação
- CORS e dotenv

**Frontend**
- HTML5, CSS3 e JavaScript puro (sem frameworks)

**Testes de API**
- Insomnia (coleção incluída em `backend/api/insomnia.json`)

## Estrutura do projeto

```
justi_in_time/
├── assets/                 # Diagramas e capturas de tela usados neste README
├── backend/
│   └── api/
│       ├── prisma/         # Schema e migrações do banco de dados
│       ├── src/
│       │   ├── controllers/  # Regras de negócio (usuário, produto, produção, login)
│       │   ├── middleware/   # Middleware de autenticação JWT
│       │   ├── routes/       # Rotas da API
│       │   └── data/         # Configuração do cliente Prisma
│       ├── insomnia.json   # Coleção de testes da API
│       └── server.js       # Ponto de entrada da API
└── frontend/
    ├── index.html         # Tela de login
    ├── principal.html     # Página principal / menu
    ├── produtos.html      # Cadastro e listagem de produtos
    ├── producao.html      # Gestão de produção
    └── style.css
```

## Como executar

### Pré-requisitos
- Node.js
- Um banco de dados MySQL/MariaDB

### Backend

```bash
cd justi_in_time/backend/api
npm install
```

Crie um arquivo `.env` na pasta `backend/api` com as variáveis:

```
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

Rode as migrações do Prisma e inicie o servidor:

```bash
npx prisma migrate dev
npm run dev
```

A API ficará disponível em `http://localhost:3000`.

### Frontend

O frontend é composto por páginas estáticas. Basta abrir o arquivo `frontend/index.html` no navegador (ou servi-lo com uma extensão como o Live Server) para acessar a tela de login e navegar pela aplicação.

## Endpoints da API

### Usuários — `/usuario`
| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/usuario/cadastrar` | Cadastra um novo usuário |
| GET | `/usuario/listar` | Lista todos os usuários |
| GET | `/usuario/buscar/:id` | Busca um usuário pelo ID |
| PUT | `/usuario/atualizar/:id` | Atualiza um usuário |
| DELETE | `/usuario/excluir/:id` | Exclui um usuário |

### Autenticação — `/auth`
| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/auth/login` | Realiza login e retorna um token JWT |
| GET | `/auth/usuario` | Retorna os dados do usuário autenticado |
| POST | `/auth/logout` | Realiza logout |

### Produtos — `/produto`
| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/produto/cadastrar` | Cadastra um novo produto |
| GET | `/produto/listar` | Lista todos os produtos |
| GET | `/produto/buscar/:id` | Busca um produto pelo ID |
| PUT | `/produto/atualizar/:id` | Atualiza um produto |
| DELETE | `/produto/excluir/:id` | Exclui um produto (bloqueado se houver produções vinculadas) |

### Produção — `/producao`
| Método | Rota | Descrição |
| --- | --- | --- |
| POST | `/producao/cadastrar` | Registra uma movimentação (`fabricado` ou `pedido`) e atualiza o estoque |
| GET | `/producao/listar` | Lista todas as movimentações, com produto e usuário |
| GET | `/producao/buscar/:id` | Busca uma movimentação pelo ID |
| PUT | `/producao/atualizar/:id` | Atualiza uma movimentação |
| DELETE | `/producao/excluir/:id` | Exclui uma movimentação |

## Screenshots

Testes dos endpoints realizados com o Insomnia.

**Usuários**

| Cadastrar | Listar | Buscar |
| --- | --- | --- |
| ![Cadastrar usuário](assets/Captura%20de%20tela%202026-09-04%20084836.png) | ![Listar usuários](assets/Captura%20de%20tela%202026-09-04%20084928.png) | ![Buscar usuário](assets/Captura%20de%20tela%202026-09-04%20084956.png) |

| Atualizar | Excluir |
| --- | --- |
| ![Atualizar usuário](assets/Captura%20de%20tela%202026-09-04%20085219.png) | ![Excluir usuário](assets/Captura%20de%20tela%202026-09-04%20085246.png) |

**Produtos**

| Cadastrar | Buscar |
| --- | --- |
| ![Cadastrar produto](assets/Captura%20de%20tela%202026-09-04%20085731.png) | ![Buscar produto](assets/Captura%20de%20tela%202026-09-04%20090114.png) |

| Atualizar | Excluir |
| --- | --- |
| ![Atualizar produto](assets/Captura%20de%20tela%202026-09-04%20090559.png) | ![Excluir produto](assets/Captura%20de%20tela%202026-09-04%20090651.png) |

**Produção**

| Listar | Buscar |
| --- | --- |
| ![Listar movimentações](assets/Captura%20de%20tela%202026-09-04%20101208.png) | ![Buscar movimentação](assets/Captura%20de%20tela%202026-09-04%20101224.png) |

| Cadastrar | Excluir |
| --- | --- |
| ![Cadastrar movimentação](assets/Captura%20de%20tela%202026-09-04%20101236.png) | ![Excluir movimentação](assets/Captura%20de%20tela%202026-09-04%20101257.png) |

# Just in Time

Sistema web para **controle de estoque e produção sob demanda (Just in Time)**, desenvolvido com Node.js/Express no backend e HTML, CSS e JavaScript puro no frontend.

A aplicação permite cadastrar produtos, gerenciar usuários com login autenticado via JWT e registrar movimentações de produção, atualizando o estoque automaticamente e alertando quando ele fica abaixo do mínimo definido.

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

Cada produto possui uma quantidade em estoque e um estoque mínimo. Toda entrada, realizada por meio de fabricação, ou saída, realizada por meio de pedido, é registrada como uma movimentação.

Ao registrar uma movimentação, o estoque do produto é atualizado automaticamente e o sistema verifica se o estoque está abaixo do mínimo definido.

---

## Funcionalidades

### Usuários

- Cadastro de usuários
- Listagem de usuários
- Busca de usuário por ID
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
- Controle de quantidade em estoque
- Controle de estoque mínimo
- Bloqueio de exclusão de produtos com movimentações

### Produção

- Cadastro de movimentações
- Movimentação do tipo `fabricado`
- Movimentação do tipo `pedido`
- Entrada automática no estoque
- Saída automática do estoque
- Validação de estoque disponível
- Alerta de estoque abaixo do mínimo
- Listagem das movimentações
- Busca de movimentações
- Atualização de movimentações
- Exclusão de movimentações

### Frontend

- Tela de login
- Página principal
- Cadastro de produtos
- Gestão de produção
- Interface simples com HTML, CSS e JavaScript

---

## Modelo de dados

O sistema possui três entidades principais:

- `Usuario`
- `Produto`
- `Producao`

A entidade `Producao` possui relacionamento com `Usuario` e `Produto`.

### Diagrama Entidade-Relacionamento

![Diagrama Entidade-Relacionamento](assets/Captura%20de%20tela%202026-09-04%20073940.png)

---

## Tecnologias

### Backend

- Node.js
- Express
- Prisma ORM
- MySQL/MariaDB
- JWT
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
│   ├── Captura de tela 2026-09-04 073940.png
│   ├── Captura de tela 2026-09-04 084836.png
│   ├── Captura de tela 2026-09-04 084928.png
│   ├── Captura de tela 2026-09-04 084956.png
│   ├── Captura de tela 2026-09-04 085219.png
│   ├── Captura de tela 2026-09-04 085246.png
│   ├── Captura de tela 2026-09-04 085731.png
│   ├── Captura de tela 2026-09-04 090114.png
│   ├── Captura de tela 2026-09-04 090559.png
│   ├── Captura de tela 2026-09-04 090651.png
│   ├── Captura de tela 2026-09-04 101208.png
│   ├── Captura de tela 2026-09-04 101224.png
│   ├── Captura de tela 2026-09-04 101236.png
│   └── Captura de tela 2026-09-04 101257.png
│
├── backend/
│   └── api/
│       ├── prisma/
│       ├── src/
│       │   ├── controllers/
│       │   ├── middleware/
│       │   ├── routes/
│       │   └── data/
│       │
│       ├── insomnia.json
│       └── server.js
│
└── frontend/
    ├── index.html
    ├── principal.html
    ├── produtos.html
    ├── producao.html
    └── style.css
```

---

## Como executar

### Pré-requisitos

- Node.js
- MySQL ou MariaDB
- Git

### Backend

Entre na pasta da API:

```bash
cd justi_in_time/backend/api
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na pasta `backend/api`:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

Execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

Inicie o servidor:

```bash
npm run dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

### Frontend

Abra o arquivo:

```text
frontend/index.html
```

Também é possível utilizar o **Live Server** do VS Code.

---

# Endpoints da API

## Usuários

| Método | Rota | Descrição |
|---|---|---|
| POST | `/usuario/cadastrar` | Cadastra um novo usuário |
| GET | `/usuario/listar` | Lista todos os usuários |
| GET | `/usuario/buscar/:id` | Busca um usuário pelo ID |
| PUT | `/usuario/atualizar/:id` | Atualiza um usuário |
| DELETE | `/usuario/excluir/:id` | Exclui um usuário |

---

## Autenticação

| Método | Rota | Descrição |
|---|---|---|
| POST | `/auth/login` | Realiza login e retorna um token JWT |
| GET | `/auth/usuario` | Retorna os dados do usuário autenticado |
| POST | `/auth/logout` | Realiza logout |

---

## Produtos

| Método | Rota | Descrição |
|---|---|---|
| POST | `/produto/cadastrar` | Cadastra um novo produto |
| GET | `/produto/listar` | Lista todos os produtos |
| GET | `/produto/buscar/:id` | Busca um produto pelo ID |
| PUT | `/produto/atualizar/:id` | Atualiza um produto |
| DELETE | `/produto/excluir/:id` | Exclui um produto |

---

## Produção

| Método | Rota | Descrição |
|---|---|---|
| POST | `/producao/cadastrar` | Registra uma movimentação |
| GET | `/producao/listar` | Lista todas as movimentações |
| GET | `/producao/buscar/:id` | Busca uma movimentação |
| PUT | `/producao/atualizar/:id` | Atualiza uma movimentação |
| DELETE | `/producao/excluir/:id` | Exclui uma movimentação |

---

# Screenshots

Os testes da API foram realizados utilizando o **Insomnia**.

## Usuários

### Cadastrar usuário

![Cadastrar usuário](assets/Captura%20de%20tela%202026-09-04%20084836.png)

### Listar usuários

![Listar usuários](assets/Captura%20de%20tela%202026-09-04%20084928.png)

### Buscar usuário

![Buscar usuário](assets/Captura%20de%20tela%202026-09-04%20084956.png)

### Atualizar usuário

![Atualizar usuário](assets/Captura%20de%20tela%202026-09-04%20085219.png)

### Excluir usuário

![Excluir usuário](assets/Captura%20de%20tela%202026-09-04%20085246.png)

---

## Produtos

### Cadastrar produto

![Cadastrar produto](assets/Captura%20de%20tela%202026-09-04%20085731.png)

### Buscar produto

![Buscar produto](assets/Captura%20de%20tela%202026-09-04%20090114.png)

### Atualizar produto

![Atualizar produto](assets/Captura%20de%20tela%202026-09-04%20090559.png)

### Excluir produto

![Excluir produto](assets/Captura%20de%20tela%202026-09-04%20090651.png)

---

## Produção

### Listar movimentações

![Listar movimentações](assets/Captura%20de%20tela%202026-09-04%20101208.png)

### Buscar movimentação

![Buscar movimentação](assets/Captura%20de%20tela%202026-09-04%20101224.png)

### Cadastrar movimentação

![Cadastrar movimentação](assets/Captura%20de%20tela%202026-09-04%20101236.png)

### Excluir movimentação

![Excluir movimentação](assets/Captura%20de%20tela%202026-09-04%20101257.png)

---

## Testes da API

Os endpoints foram testados utilizando o **Insomnia**.

Foram realizados testes de:

- Cadastro
- Listagem
- Busca
- Atualização
- Exclusão
- Login
- Autenticação
- Movimentações de produção

---

## Autor

Projeto desenvolvido para fins acadêmicos.

**Just in Time — Sistema de Controle de Estoque e Produção**

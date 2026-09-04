# 🚀 Just in Time

Sistema web para **gerenciamento de estoque e produção sob demanda**, desenvolvido com base no conceito **Just in Time (JIT)**.

O sistema permite controlar produtos, usuários e movimentações de produção, mantendo o estoque atualizado de acordo com as entradas e saídas realizadas.

---

# 📋 Sumário

- [Sobre o projeto](#-sobre-o-projeto)
- [Objetivo](#-objetivo)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Banco de dados](#-banco-de-dados)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Usuários](#-usuários)
- [Produtos](#-produtos)
- [Produção](#-produção)
- [API](#-api)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Execução](#-execução)
- [Frontend](#-frontend)
- [Testes](#-testes)

---

# 📌 Sobre o projeto

O **Just in Time** é uma aplicação web desenvolvida para auxiliar no gerenciamento de estoque e produção.

A proposta do sistema é permitir que uma empresa acompanhe seus produtos, suas quantidades em estoque e as movimentações realizadas.

Quando um produto é fabricado, sua quantidade é adicionada ao estoque.

Quando um produto é utilizado em um pedido, sua quantidade é retirada do estoque.

O sistema também permite identificar produtos que estão abaixo da quantidade mínima definida.

---

# 🎯 Objetivo

O principal objetivo do projeto é desenvolver um sistema simples e funcional para:

- Controlar o estoque;
- Cadastrar produtos;
- Controlar a produção;
- Registrar pedidos;
- Cadastrar usuários;
- Atualizar informações;
- Excluir registros;
- Consultar registros;
- Controlar automaticamente as quantidades em estoque;
- Identificar produtos com estoque baixo.

---

# ⚙️ Funcionalidades

## 👤 Usuários

O sistema possui funcionalidades para gerenciamento dos usuários:

- Cadastrar usuário;
- Listar usuários;
- Buscar usuário por ID;
- Atualizar usuário;
- Excluir usuário;
- Realizar login;
- Autenticação utilizando JWT;
- Consultar usuário autenticado;
- Logout.

---

## 📦 Produtos

O sistema permite:

- Cadastrar produtos;
- Listar produtos;
- Buscar produtos;
- Atualizar produtos;
- Excluir produtos;
- Controlar quantidade em estoque;
- Definir estoque mínimo;
- Identificar estoque abaixo do mínimo.

Um produto que possui movimentações não pode ser excluído para evitar problemas no histórico do estoque.

---

## 🏭 Produção

O módulo de produção permite:

- Cadastrar movimentações;
- Listar movimentações;
- Buscar movimentação;
- Atualizar movimentação;
- Excluir movimentação;
- Registrar produtos fabricados;
- Registrar pedidos;
- Atualizar automaticamente o estoque.

### Fabricação

Quando uma produção é registrada como **fabricada**, a quantidade do produto é adicionada ao estoque.

### Pedido

Quando uma produção é registrada como **pedido**, a quantidade do produto é retirada do estoque.

---

# 💻 Tecnologias utilizadas

## Backend

- Node.js
- Express
- Prisma ORM
- MariaDB / MySQL
- JWT
- CORS
- Dotenv

## Frontend

- HTML5
- CSS3
- JavaScript

## Testes da API

- Insomnia

---

# 🗄️ Banco de dados

O banco de dados foi desenvolvido utilizando **MariaDB/MySQL** e gerenciado através do **Prisma ORM**.

## Entidades

O sistema possui três entidades principais:

### 👤 Usuario

Responsável pelo cadastro e autenticação dos usuários do sistema.

### 📦 Produto

Armazena os produtos e suas informações de estoque.

### 🏭 Producao

Armazena as movimentações relacionadas à fabricação e aos pedidos.

---

# 📐 DER

O Diagrama Entidade-Relacionamento representa a estrutura do banco de dados utilizado no projeto.

![Diagrama Entidade-Relacionamento](assets/Captura%20de%20tela%202026-09-04%20073940.png)

---

# 📁 Estrutura do projeto

```text
justi_in_time/
│
├── assets/
│   │
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
│   │
│   └── api/
│       │
│       ├── prisma/
│       │
│       ├── src/
│       │   │
│       │   ├── controllers/
│       │   ├── middleware/
│       │   ├── routes/
│       │   └── data/
│       │
│       ├── insomnia.json
│       ├── package.json
│       └── server.js
│
└── frontend/
    │
    ├── index.html
    ├── principal.html
    ├── produtos.html
    ├── producao.html
    └── style.css
```

---

# 👤 Usuários

## ➕ Cadastrar usuário

Tela utilizada para realizar o cadastro de um novo usuário.

![Cadastrar usuário](assets/Captura%20de%20tela%202026-09-04%20084836.png)

---

## 📋 Listar usuários

Tela responsável por apresentar os usuários cadastrados no sistema.

![Listar usuários](assets/Captura%20de%20tela%202026-09-04%20084928.png)

---

## 🔎 Buscar usuário

Permite consultar um usuário específico através de seu ID.

![Buscar usuário](assets/Captura%20de%20tela%202026-09-04%20084956.png)

---

## ✏️ Atualizar usuário

Permite alterar as informações de um usuário cadastrado.

![Atualizar usuário](assets/Captura%20de%20tela%202026-09-04%20085219.png)

---

## 🗑️ Excluir usuário

Permite remover um usuário cadastrado.

![Excluir usuário](assets/Captura%20de%20tela%202026-09-04%20085246.png)

---

# 📦 Produtos

## ➕ Cadastrar produto

Tela utilizada para cadastrar um novo produto no sistema.

![Cadastrar produto](assets/Captura%20de%20tela%202026-09-04%20085731.png)

---

## 🔎 Buscar produto

Permite consultar um produto através de seu ID.

![Buscar produto](assets/Captura%20de%20tela%202026-09-04%20090114.png)

---

## ✏️ Atualizar produto

Permite modificar as informações de um produto.

![Atualizar produto](assets/Captura%20de%20tela%202026-09-04%20090559.png)

---

## 🗑️ Excluir produto

Permite excluir um produto do sistema quando não existem movimentações relacionadas a ele.

![Excluir produto](assets/Captura%20de%20tela%202026-09-04%20090651.png)

---

# 🏭 Produção

## 📋 Listar produção

Apresenta todas as movimentações de produção cadastradas.

![Listar produção](assets/Captura%20de%20tela%202026-09-04%20101208.png)

---

## 🔎 Buscar produção

Permite consultar uma movimentação específica.

![Buscar produção](assets/Captura%20de%20tela%202026-09-04%20101224.png)

---

## ➕ Cadastrar produção

Permite registrar uma nova movimentação de produção.

![Cadastrar produção](assets/Captura%20de%20tela%202026-09-04%20101236.png)

---

## 🗑️ Excluir produção

Permite excluir uma movimentação cadastrada.

![Excluir produção](assets/Captura%20de%20tela%202026-09-04%20101257.png)

---

# 🔌 API

A API foi desenvolvida utilizando **Node.js e Express**.

A aplicação utiliza diferentes rotas para realizar as operações de CRUD.

---

# 👤 Rotas de Usuário

| Método | Rota | Função |
|---|---|---|
| POST | `/usuario` | Cadastrar usuário |
| GET | `/usuario` | Listar usuários |
| GET | `/usuario/buscar/:id` | Buscar usuário |
| PUT | `/usuario/:id` | Atualizar usuário |
| DELETE | `/usuario/:id` | Excluir usuário |

---

# 🔐 Rotas de Autenticação

| Método | Rota | Função |
|---|---|---|
| POST | `/auth/login` | Realizar login |
| GET | `/auth/usuario` | Consultar usuário autenticado |
| POST | `/auth/logout` | Realizar logout |

---

# 📦 Rotas de Produto

| Método | Rota | Função |
|---|---|---|
| POST | `/produto` | Cadastrar produto |
| GET | `/produto` | Listar produtos |
| GET | `/produto/buscar/:id` | Buscar produto |
| PUT | `/produto/:id` | Atualizar produto |
| DELETE | `/produto/:id` | Excluir produto |

---

# 🏭 Rotas de Produção

| Método | Rota | Função |
|---|---|---|
| POST | `/producao` | Cadastrar produção |
| GET | `/producao` | Listar produção |
| GET | `/producao/buscar/:id` | Buscar produção |
| PUT | `/producao/:id` | Atualizar produção |
| DELETE | `/producao/:id` | Excluir produção |

---

# 🔐 Autenticação

A autenticação da aplicação é realizada através de **JWT (JSON Web Token)**.

O processo funciona da seguinte forma:

1. O usuário informa seus dados de login;
2. O backend verifica as informações;
3. Se os dados estiverem corretos, um token JWT é gerado;
4. O token é utilizado para acessar rotas protegidas;
5. O usuário pode realizar logout através da rota de autenticação.

---

# 📦 Controle de estoque

O estoque é atualizado automaticamente de acordo com as movimentações.

### 🟢 Produto fabricado

```text
Estoque atual + quantidade fabricada
```

### 🔴 Produto pedido

```text
Estoque atual - quantidade pedida
```

O sistema também verifica se a quantidade disponível é suficiente para realizar um pedido.

---

# ⚠️ Estoque mínimo

Cada produto possui uma quantidade mínima de estoque.

Quando a quantidade disponível fica abaixo do valor mínimo definido, o sistema pode indicar que o produto precisa ser reposto.

Exemplo:

```text
Estoque atual: 5
Estoque mínimo: 10

⚠️ Estoque abaixo do mínimo
```

---

# 🛠️ Instalação

## 1. Clonar o projeto

```bash
git clone https://github.com/matheusspineli/just_in_time_01_2025.git
```

---

## 2. Entrar na pasta do projeto

```bash
cd just_in_time_01_2025
```

---

## 3. Entrar no backend

```bash
cd justi_in_time/backend/api
```

---

## 4. Instalar as dependências

```bash
npm install
```

---

# ⚙️ Configuração

Crie um arquivo chamado:

```text
.env
```

Dentro da pasta:

```text
justi_in_time/backend/api/
```

Adicione as configurações:

```env
DATABASE_URL="sua_url_do_banco"
JWT_SECRET="sua_chave_secreta"
PORT=3000
```

---

# 🗃️ Prisma

Depois de configurar o banco de dados, execute:

```bash
npx prisma migrate dev
```

Para visualizar o banco através do Prisma Studio:

```bash
npx prisma studio
```

---

# ▶️ Executando o backend

Para iniciar o servidor:

```bash
npm run dev
```

O backend ficará disponível em:

```text
http://localhost:3000
```

---

# 🌐 Executando o frontend

Entre na pasta:

```text
justi_in_time/frontend/
```

Abra o arquivo:

```text
index.html
```

Também pode ser utilizado o **Live Server** no Visual Studio Code.

---

# 🧪 Testes

Os testes da API podem ser realizados utilizando o **Insomnia**.

O projeto possui um arquivo:

```text
insomnia.json
```

Esse arquivo contém as requisições utilizadas para testar as rotas da API.

---

# 📊 Operações CRUD

O sistema utiliza as quatro principais operações CRUD:

| Operação | Método HTTP | Função |
|---|---|---|
| Create | POST | Criar registros |
| Read | GET | Consultar registros |
| Update | PUT | Atualizar registros |
| Delete | DELETE | Excluir registros |

---

# 🧩 Arquitetura

O backend está organizado seguindo uma separação de responsabilidades.

```text
Routes
   ↓
Controllers
   ↓
Prisma
   ↓
Banco de Dados
```

### Routes

Responsáveis por definir as rotas da API.

### Controllers

Responsáveis pela lógica das operações.

### Prisma

Responsável pela comunicação entre a aplicação e o banco de dados.

### Middleware

Responsável por funções intermediárias, como autenticação.

---

# 📸 Resumo dos prints

## Usuários

![Cadastrar usuário](assets/Captura%20de%20tela%202026-09-04%20084836.png)

![Listar usuários](assets/Captura%20de%20tela%202026-09-04%20084928.png)

![Buscar usuário](assets/Captura%20de%20tela%202026-09-04%20084956.png)

![Atualizar usuário](assets/Captura%20de%20tela%202026-09-04%20085219.png)

![Excluir usuário](assets/Captura%20de%20tela%202026-09-04%20085246.png)

---

## Produtos

![Cadastrar produto](assets/Captura%20de%20tela%202026-09-04%20085731.png)

![Buscar produto](assets/Captura%20de%20tela%202026-09-04%20090114.png)

![Atualizar produto](assets/Captura%20de%20tela%202026-09-04%20090559.png)

![Excluir produto](assets/Captura%20de%20tela%202026-09-04%20090651.png)

---

## Produção

![Listar produção](assets/Captura%20de%20tela%202026-09-04%20101208.png)

![Buscar produção](assets/Captura%20de%20tela%202026-09-04%20101224.png)

![Cadastrar produção](assets/Captura%20de%20tela%202026-09-04%20101236.png)

![Excluir produção](assets/Captura%20de%20tela%202026-09-04%20101257.png)

---

# 👨‍💻 Projeto

**Just in Time**

Sistema de gerenciamento de estoque e produção.

Desenvolvido como projeto acadêmico.

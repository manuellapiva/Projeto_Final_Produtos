# 📦 SISTEMA DE GESTÃO DE PRODUTOS

Uma aplicação web moderna desenvolvida com React que permite gerenciar produtos de forma completa, realizando operações de cadastro, listagem, edição e exclusão. Este projeto demonstra a integração entre front-end e backend através de requisições HTTP.

---

## 📋 Sobre

O **Sistema de Gestão de Produtos** é uma aplicação interativa desenvolvida com React e Vite, com foco na comunicação com uma API RESTful.

O sistema permite ao usuário:

* cadastrar novos produtos
* visualizar todos os produtos cadastrados
* editar informações existentes
* excluir produtos

**Conceito:** O cliente (React) se comunica com um servidor backend por meio de requisições HTTP (Fetch API), realizando operações CRUD em tempo real.

---

## 📦 Instalação

### Setup

1. **Clone o repositório:**

   ```bash
   git clone <link-do-repositorio>
   cd projeto-final-produtos
   ```

2. **Instale as dependências do front-end:**

   ```bash
   cd front-end
   npm install
   ```
   2.1. Se necessário, faça a instalação do toast : 
   ```bash
   npm install react-toastify
   ```
---

## 🚀 Rodando o Projeto

### 🔹 Backend

Acesse a pasta do backend com : 

```bash
cd back-end
```

E execute:

```bash
npm install
node app.js
```

---

### 🔹 Frontend

Acesse a pasta do front-end com:

```bash
cd front-end
```

E execute:

```bash
npm run dev
```

---

### 🌐 Acesse no navegador

```
http://localhost:5173
```

---

## 🔌 API Utilizada

O projeto consome uma API REST desenvolvida previamente por nós para gerenciamento de produtos.

### 📋 Rotas disponíveis:

### 🔍 Listar produtos:

```
GET /produtos
```

### ➕ Criar produto:

```
POST /produtos
```

### ✏️ Atualizar produto:

```
PUT /produtos/{id}
```

### 🗑️ Deletar produto:

```
DELETE /produtos/{id}
```

---

## 🎯 Funcionalidades

* 📋 Listagem de produtos
* ➕ Cadastro de novos produtos
* ✏️ Edição de produtos existentes
* 🗑️ Exclusão de produtos
* ⏳ Feedback de carregamento
* ❌ Tratamento de erros
* 📭 Exibição de lista vazia
* 🔀 Navegação entre páginas (React Router)
* 🎨 Interface organizada e responsiva

---

## 🎯 Exemplo de Uso

1. Abra o sistema no navegador.
2. Acesse a aba **Produtos**.
3. Preencha o formulário para cadastrar um novo produto.
4. Veja o produto aparecer na lista.
5. Clique em **Editar** para alterar informações.
6. Clique em **Excluir** para remover o produto.

---

## 📝 Notas

* O backend deve estar rodando para o sistema funcionar
* Os dados são armazenados no banco de dados do servidor
* A aplicação utiliza Fetch API para comunicação com o backend
* Requer conexão com o servidor local (`localhost:3000`)
* Utiliza React Hooks (`useState`, `useEffect`)

---

## 👨‍💻 Tecnologias Utilizadas

* ⚛️ React
* ⚡ Vite
* 🧠 JavaScript (ES6+)
* 🔀 React Router
* 🌐 Fetch API
* 🎨 CSS

---

## 👥 Integrantes

* Manuella da Silva Piva
* Ayla Cristina da Silva Vilela
* Maria Vitória Guedes Ferreira
* Gabriella Camacho Stavarengo
* Gustavo Millamonte

---

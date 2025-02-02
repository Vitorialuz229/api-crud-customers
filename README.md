# API de CRUD de Clientes

Esta é uma API RESTful construída com **Node.js**, **TypeScript** e **MongoDB** para realizar operações CRUD (Create, Read, Delete) em clientes (customer).

## 🚀 Tecnologias Utilizadas

### **Back-end:**
- ![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

### **Ferramentas e Pacotes:**
- ![Mongoose](https://img.shields.io/badge/Mongoose-%233e1d1d.svg?style=for-the-badge&logo=mongoose&logoColor=white)
- ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

### **Versionamento:**
- ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
- ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## 📦 Funcionalidades da API

A API oferece as seguintes funcionalidades para gerenciamento de clientes:

- **Criar Cliente**: Permite a criação de novos clientes no banco de dados.
- **Listar Clientes**: Retorna todos os clientes cadastrados.
- **Buscar Cliente**: Retorna um cliente específico baseado no ID.
- **Atualizar Cliente**: Permite a atualização dos dados de um cliente.
- **Deletar Cliente**: Permite a exclusão de um cliente específico.

## 🛠️ Como Rodar

### Pré-requisitos

1. **Node.js**: Para rodar a aplicação, você precisa ter o **Node.js** instalado. Você pode baixar em [nodejs.org](https://nodejs.org/).
2. **MongoDB**: A API utiliza o **MongoDB** como banco de dados. Se você não tem o MongoDB localmente, pode utilizar o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para um banco de dados em nuvem.

### Passos para Execução

1. Clone o repositório:

```bash
git clone https://github.com/Vitorialuz229/api-crud-customers.git
cd api-crud-customers
```

2. Instale as dependências:
   
```bash
npm install
```

3. Configure as variáveis de ambiente. Crie um arquivo .env na raiz do projeto e adicione a seguinte linha com a URL do seu MongoDB:
```bash
MONGO_URI=mongodb://localhost:27017/customers
```

4. Inicie a aplicação:
```bash
npm run dev
```
A API estará disponível em http://localhost:3000.

## 📚 Endpoints
1. Criar Cliente
Método: POST

Endpoint: /customer

Exemplo de Body:
```json
{
  "name": "João Silva",
  "email": "joao.silva@example.com",
}
```

2. Listar Todos os Clientes
Método: GET

Endpoint: /customers

3. Deletar Cliente
Método: DELETE

Endpoint: /customer?id={id}

## ⚡ Testes
Não há testes automáticos implementados neste projeto. Caso deseje testar manualmente, você pode usar ferramentas como Postman ou Insomnia para enviar requisições HTTP.

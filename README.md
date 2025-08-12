# 📋 Cadastro de Usuários — Frontend React

Aplicação frontend desenvolvida em **React** para consumir e interagir com a API de **Cadastro de Usuários** já disponível no meu GitHub.  
Permite **listar, cadastrar e excluir usuários**, integrando-se a uma API Node.js com **Express**, **Prisma** e banco de dados **MongoDB**.

---

## 🖥️ Demonstração

![Cadastro de Usuários - Google Chrome 2025-08-12 13-11-20](https://github.com/user-attachments/assets/eb40d571-25fd-41d6-b57f-633d1c2057a4)
<img width="1366" height="637" alt="image" src="https://github.com/user-attachments/assets/0355855b-5654-4916-9677-598409e2396d" />
<img width="1366" height="638" alt="image" src="https://github.com/user-attachments/assets/bd642563-045c-4682-a5c6-c26f31df92fd" />
<img width="1366" height="637" alt="image" src="https://github.com/user-attachments/assets/66c2ec5f-4b0b-49ce-bc2d-2a46d8909ab5" />

---

## 🚀 Funcionalidades

- **Listagem de usuários** cadastrados, salvos no banco de dados **MongoDB**.
- **Cadastro de novos usuários** com nome, idade e e-mail.
- **Exclusão de usuários** via botão de remoção.
- **Validação de mensagens de erro** recebidas da API.
- Integração total com a API backend hospedada no meu GitHub.

---

## 🔗 Integração com a API

Este frontend consome a API disponível em:  
**[📂 Repositório da API no GitHub](https://github.com/WerlysSantos/api-nodejs-cadastro-de-usuarios)**

### 🔄 Alterações na API para integração
Para permitir a integração com este frontend, foram realizadas as seguintes modificações na API original:
1. **Adição de suporte ao CORS** para permitir requisições do React.
2. **Retorno de mensagens de erro personalizadas** para melhor exibição no frontend.
3. **Ajuste nas rotas** para seguir o padrão utilizado pelo frontend (`/users`).
4. **Melhoria na estrutura de resposta JSON** para facilitar o consumo dos dados.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- React
- Axios
- CSS3
- Vite

### **Backend (API)**
- Node.js
- Express
- Prisma ORM
- MongoDB
- CORS

---

## ▶️ Como Executar

### **1️⃣ Clonar o repositório**
```bash
git clone https://github.com/WerlysSantos/cadastro-de-usuarios-react
cd cadastro-usuarios-react
```

### **2️⃣ Instalar dependências**
```bash
npm install
```

### **3️⃣ Configurar a URL da API**
No arquivo `src/services/api.js`, ajuste a `baseURL` para o endereço da sua API:
```javascript
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000' // ou a URL do seu backend
});
```

### **4️⃣ Rodar a aplicação**
```bash
npm run dev
```

---

## 📌 Rotas da API Utilizadas

- **GET** `/users` → Lista todos os usuários
- **POST** `/users` → Cria um novo usuário
- **DELETE** `/users/:id` → Remove um usuário pelo ID

---

## ✍️ Autor

Werlys Santos  
🔗 [LinkedIn](https://www.linkedin.com/in/werlys-santos/)  
🐙 [GitHub](https://github.com/WerlysSantos)

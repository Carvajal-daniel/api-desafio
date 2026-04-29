# 📌 API de Controle de Ponto

API desenvolvida como desafio técnico para gerenciamento de colaboradores e registro de ponto.

## 🚀 Deploy

A API foi hospedada utilizando a **Vercel**, aproveitando o modelo serverless para facilitar o deploy e execução.

## 🛠️ Tecnologias

* Node.js
* TypeScript
* Fastify
* Vercel (deploy)

## ▶️ Como rodar o projeto

```bash
npm install
npm run dev
```

A aplicação será iniciada em:

```
http://localhost:3000
```

## 📂 Estrutura e observações

* A aplicação foi organizada de forma simples e objetiva, focando no funcionamento correto das funcionalidades principais.
* Foram adicionados alguns comentários nos arquivos `app.ts` e `server.ts` para facilitar o entendimento da inicialização da aplicação e adaptação para o ambiente da Vercel.

## ⚙️ Funcionamento

A API permite:

* Cadastro de colaboradores
* Registro de ponto por colaborador
* Listagem de registros

## ☁️ Sobre o deploy na Vercel

Para funcionar corretamente na Vercel, foi necessário adaptar a inicialização do servidor para o modelo serverless.
Por isso:

* Em ambiente local, o servidor roda normalmente com `app.listen`
* Em produção, a Vercel utiliza um handler exportado

## 💡 Considerações

O foco do projeto foi entregar um MVP funcional, com código limpo e fácil de entender, priorizando clareza e organização.

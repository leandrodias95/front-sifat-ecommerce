
# Sifat E-commerce - Frontend

## Descrição

Este projeto é uma aplicação web de gestão de produtos e categorias para um e-commerce, construída com foco em requisitos técnicos para um desafio de frontend com React.  
A aplicação permite realizar **CRUD completo** (criar, ler, atualizar e deletar) tanto de **produtos** quanto de **categorias**, com paginação, filtros e formulário validado.

### O que faz o app?

- Listagem paginada de produtos e categorias
- Filtro de busca para produtos e categorias
- Cadastro, edição e exclusão de registros
- Integração completa com uma API REST Spring Boot
- Interface amigável com Material UI
- Validação de formulários com Yup e Unform

### Com o que foi construído?

- React 18
- TypeScript
- React Router DOM v6
- Axios
- Yup + Unform
- Material UI
- Vite
- Context API para o menu lateral

### Por que foi construído?

Este projeto foi desenvolvido como parte de um **desafio técnico frontend**, com foco em boas práticas, componentização, integrações com API REST real, responsividade e experiência do usuário.

---

## Instruções de Instalação

### Pré-requisitos

- Node.js 18+
- NPM 9+
- Git
- Backend rodando localmente (porta 8080)

### Etapas

```bash
# Clone o repositório
git clone https://github.com/leandrodias95/sifatecommerce.git

# Acesse a pasta do projeto
cd sifat-ecommerce

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

---

## Instruções de Uso

1. Inicie o backend Spring Boot na porta `8080`
2. Rode o frontend com `npm run dev`
3. Acesse [http://localhost:5173](http://localhost:5173) no navegador

---

## Diferenciais

- Utilização inicial com **JSON Server** para mock de API RESTful, facilitando o desenvolvimento antes da integração com backend real.
- Após validação do fluxo, o sistema foi completamente migrado para **integração com Spring Boot** com paginação, busca e persistência real.
- Uso de Material UI com responsividade e navegação fluida.
- Separação de camadas de serviços, layouts, formulários e hooks personalizados.

---

## Licença

Este projeto é de uso educacional e livre para estudo e aprendizado.

- ✅ Permissão para uso não comercial
- ✅ Pode servir de base para estudos e projetos próprios
- ❌ Não utilizar em projetos comerciais sem autorização

---

## Contribuição

Este repositório não está aceitando contribuições externas no momento por se tratar de um desafio técnico individual.  
Sinta-se à vontade para clonar, estudar, adaptar e utilizar como inspiração para seus próprios projetos.
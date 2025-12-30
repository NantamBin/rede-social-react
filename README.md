# Rede Social React 🌐

Um front-end para uma rede social, construído com **React**, **TypeScript** e **Vite**. O projeto conta com sistema de rotas, gerenciamento de posts e um dashboard administrativo para operações de CRUD.

## 🚀 Funcionalidades

- **Feed de Notícias (Home)**: Visualização geral de postagens.
- **Dashboard Administrativo**: Gerenciamento centralizado de recursos (Posts, Usuários, etc.).
- **Sistema de CRUD**: Criação, leitura, atualização e exclusão de itens através de modais.
- **Visualização Individual**: Rota dinâmica para visualizar detalhes específicos de um post (`/post/:id`).
- **Layout**: Interface construída com **Tailwind CSS**.

## 🛠️ Tecnologias Utilizadas

- **Core**: [React 18](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Roteamento**: [React Router DOM v6](https://reactrouter.com/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes de UI**: [React Modal](https://github.com/reactjs/react-modal)
- **Linter**: [ESLint](https://eslint.org/)

## 📂 Estrutura de Rotas

| Rota | Componente | Descrição |
| :--- | :--- | :--- |
| `/` | `Home` | Feed principal da rede social. |
| `/dashboard` | `DashboardPage` | Área administrativa com lógica de CRUD. |
| `/post/:id` | `PostView` | Visualização detalhada de um post específico. |

## 🔧 Instalação e Execução

1. **Clone o repositório:**
```bash
   git clone https://github.com/jotor-dev/rede-social-react.git
   cd rede-social-react
```
2. **Instale as dependências:**
```bash
npm install

```
3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```
4. **Acesse no navegador:**
O Vite geralmente disponibiliza o projeto em `http://localhost:5173`.

## 📦 Scripts Disponíveis

* `npm run dev`: Inicia o servidor local de desenvolvimento.
* `npm run build`: Gera a versão otimizada para produção na pasta `dist`.
* `npm run lint`: Executa a verificação do ESLint para manter a qualidade do código.
* `npm run preview`: Visualiza localmente o build de produção.

## 📐 Organização do Código

O projeto utiliza o hook customizado `CrudLogicResources` para separar a lógica de negócio da interface do usuário no Dashboard, permitindo que a aplicação seja facilmente escalável para outros tipos de recursos além de "posts".

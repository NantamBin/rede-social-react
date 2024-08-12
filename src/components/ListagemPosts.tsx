import React from 'react';

// Define a interface das propriedades que o componente ListagemPosts espera receber
interface ListagemPostsProps {
  resources: string; // Tipo de recurso atual (pode ser "posts", "comments" ou "users")
  items: any[]; // Lista de itens a serem exibidos (pode ser posts, comentários ou usuários)
  handleCreate: () => void; // Função para criar um novo item
  handleUpdate: (item: any) => void; // Função para atualizar um item existente
  deleteItem: (id: number) => void; // Função para remover um item por seu ID
}

// Define o componente ListagemPosts como uma função React
const ListagemPosts: React.FC<ListagemPostsProps> = ({
  resources,
  items,
  handleCreate,
  handleUpdate,
  deleteItem
}) => {

  return (
    <div className="App">
      {/* Botão para criar um novo item do tipo atual */}
      <button onClick={handleCreate}>Criar um novo {resources.slice(0, -1)}</button>

      {/* Exibe o nome do recurso atual */}
      <h1>{resources}</h1>

      {/* Mapeia e exibe cada item na lista de itens */}
      {items.map((item, index) => {
        return (
          <div key={index}>
            {/* Exibe o item como JSON para fácil visualização */}
            <pre style={{ textAlign: "left" }}>
              {JSON.stringify(item, null, " ")}
            </pre>
            {/* Botão para editar o item */}
            <button onClick={() => handleUpdate(item)}>Editar</button>
            {/* Botão para remover o item */}
            <button onClick={() => deleteItem(item.id)}>Remover</button>
          </div>
        );
      })}
    </div>
  );
};

// Exporta o componente para uso em outros arquivos
export default ListagemPosts;

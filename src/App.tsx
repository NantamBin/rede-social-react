import { useEffect, useState } from 'react';
import ListagemPosts from './components/ListagemPosts';
import CrudModal from './components/CrudModal';
import Dashboard from './pages/Dashboard.tsx';

export default function App() {
  // Estado para armazenar o tipo de recurso atual (posts, comments, users)
  const [resources, setResources] = useState("posts");

  // Estado para armazenar os itens do recurso atual
  const [items, setItems] = useState<any[]>([]);

  // Estado para controlar a visibilidade do modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Estado para armazenar o item atual sendo criado ou atualizado
  const [currentItem, setCurrentItem] = useState<any>(null);

  // Estado para armazenar a ação do modal (criação ou atualização)
  const [modalAction, setModalAction] = useState<"create" | "update">("create");

  // useEffect para buscar os itens sempre que o tipo de recurso mudar
  useEffect(() => {
    fetchItems();
  }, [resources]);

  // Função para buscar os itens do recurso atual da API
  const fetchItems = () => {
    fetch(`https://jsonplaceholder.typicode.com/${resources}`)
      .then((response) => response.json()) // Converte a resposta em JSON
      .then((json) => setItems(json)); // Atualiza o estado com os itens recebidos
  };

  // Função para criar um novo item na lista
  const createItem = (item: any) => {
    setItems([...items, item]); // Adiciona o novo item ao final da lista
  };

  // Função para atualizar um item existente na lista
  const updateItem = (id: number, updatedItem: any) => {
    setItems(items.map(item => item.id === id ? updatedItem : item)); // Substitui o item correspondente ao id
  };

  // Função para remover um item da lista
  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id)); // Filtra a lista para remover o item com o id correspondente
  };

  // Função para abrir o modal para criação de um novo item
  const handleCreate = () => {
    setModalAction("create"); // Define a ação do modal como "create"
    setCurrentItem({ title: '', body: '' }); // Define o item atual como um novo objeto vazio
    setModalIsOpen(true); // Abre o modal
  };

  // Função para abrir o modal para atualização de um item existente
  const handleUpdate = (item: any) => {
    setModalAction("update"); // Define a ação do modal como "update"
    setCurrentItem(item); // Define o item atual como o item a ser atualizado
    setModalIsOpen(true); // Abre o modal
  };

  // Função para submeter o formulário do modal (criação ou atualização)
  const handleSubmit = () => {
    if (modalAction === "create") {
      createItem(currentItem); // Chama a função para criar um novo item
    } else if (modalAction === "update") {
      updateItem(currentItem.id, currentItem); // Chama a função para atualizar o item existente
    }
    setModalIsOpen(false); // Fecha o modal após a submissão
  };

  return (
    <>
      {/* Exibe o componente Dashboard */}
      <Dashboard
        setResources={setResources}
      />

      // {/* Descomentar as linhas abaixo para exibir a lista de posts e o modal */}
      <div className="main-content ml-64 p-4">
        <ListagemPosts
          resources={resources}
          items={items}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
          deleteItem={deleteItem}
        />
        <CrudModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          action={modalAction}
          item={currentItem}
          setItem={setCurrentItem}
          onSubmit={handleSubmit}
          resourceName={resources.slice(0, -1)}
        />
      </div>
    </>
  );
}

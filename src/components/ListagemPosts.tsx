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
      <button onClick={handleCreate} className="mb-4 px-4 py-2 bg-red-800 text-white rounded-lg">Criar um novo {resources.slice(0, -1)}</button>

      {/* Exibe o nome do recurso atual */}
      <h1 className="text-3xl font-bold mb-6">{resources}</h1>

      {/* Container flexível para exibir os cartões lado a lado */}
      <div className="flex flex-wrap justify-start">
        {items.map((item, index) => (
          <div key={index} className="relative bg-gray-900 p-4 border border-gray-100 rounded-lg w-full sm:w-1/2 md:w-2/3 lg:w-2/4 mx-2 my-4">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="my-2">
              {resources === "posts" ? (
                <>
                  <h2 className="text-white text-2xl font-bold pb-2">Post - {index + 1}</h2>
                  <p className="text-gray-300 py-1">Conteúdo:</p>
                  <div className=" rounded p-2 overflow-auto">
                    <pre style={{ textAlign: "left", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                      <ul className="divide-y divide-gray-300 bg-gray-50 rounded-md px-4 py-2 mt-4">
                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Id:</b> {item.id} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Id do Usuário:</b> {item.userId} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Título:</b> {item.title} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Corpo do Texto:</b> {item.body} </span>
                          </div>
                        </li>
                      </ul>
                    </pre>
                  </div>
                </>
              ) : resources === "comments" ? (
                <>
                  <h2 className="text-white text-2xl font-bold pb-2">Comment - {index + 1}</h2>
                  <p className="text-gray-300 py-1">Conteúdo:</p>
                  <div className="bg-white-400 rounded p-2 overflow-auto">
                    <pre style={{ textAlign: "left", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                      <ul className="divide-y divide-gray-300 bg-gray-50 rounded-md px-4 py-2 mt-4">
                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Id:</b> {item.id} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Id do Post:</b> {item.postId} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Nome:</b> {item.name} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Email:</b> {item.email} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Corpo do Texto:</b> {item.body} </span>
                          </div>
                        </li>
                      </ul>
                    </pre>
                  </div>
                </>
              ) :
                <>
                  <h2 className="text-white text-2xl font-bold pb-2">User - {index + 1}</h2>
                  <p className="text-gray-300 py-1">Conteúdo:</p>
                  <div className="bg-white-400 rounded p-2 overflow-auto">
                    <pre style={{ textAlign: "left", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                      <ul className="divide-y divide-gray-300 bg-gray-50 rounded-md px-4 py-2 mt-4">
                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Id:</b> {item.id} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Nome:</b> {item.name} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Nome de Usuário:</b> {item.username} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Email:</b> {item.email} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Endereço</b> {item.addres} </span>
                          </div>

                          <ul className="divide-y divide-gray-300 bg-gray-100 rounded-md px-4 py-2 mt-2">
                            <li className="py-2">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium"><b>Rua:</b> {item.address.street} </span>
                              </div>
                            </li>

                            <li className="py-2">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium"><b>Suite:</b> {item.address.suite} </span>
                              </div>
                            </li>

                            <li className="py-2">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium"><b>Cidade:</b> {item.address.city} </span>
                              </div>
                            </li>

                            <li className="py-2">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium"><b>CEP:</b> {item.address.zipcode} </span>
                              </div>
                            </li>
                          </ul>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Telefone:</b> {item.phone} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Website:</b> {item.website} </span>
                          </div>
                        </li>

                        <li className="py-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-md font-medium"><b>Empresa:</b></span>
                          </div>

                          <ul className="divide-y divide-gray-300 bg-gray-100 rounded-md px-4 py-2 mt-2">
                            <li className="py-2">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium"><b>Nome:</b> {item.company.name}</span>
                              </div>
                            </li>

                            <li className="py-2">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium"><b>Frase de Efeito:</b> {item.company.catchPhrase}</span>
                              </div>
                            </li>

                            <li className="py-2">
                              <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium"><b>Obs:</b> {item.company.bs}</span>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </pre>
                  </div>
                </>
              }

            </div>

            <div className="flex justify-end space-x-2">
              <button className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800" onClick={() => handleUpdate(item)}>Editar</button>
              {/* Botão para remover o item */}
              <button className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800" onClick={() => deleteItem(item.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporta o componente para uso em outros arquivos
export default ListagemPosts;

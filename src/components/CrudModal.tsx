import React from 'react';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';


// Assuming your root element has the id 'root'
Modal.setAppElement('#root');

interface CrudModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  action: "create" | "update";
  item: any;
  setItem: (item: any) => void;
  onSubmit: (id: number) => void;
  resourceName: string;
}

const CrudModal: React.FC<CrudModalProps> = ({
  isOpen,
  onRequestClose,
  action,
  item,
  setItem,
  onSubmit,
  resourceName,
}) => {
  const [oldId, setOldId] = useState<number>(0);

  useEffect(() => {
    if (isOpen && action === 'update') {
      setOldId(item?.id || 0);
    }
  }, [isOpen, action]);


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`${action === "create" ? "Create" : "Update"} ${resourceName}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75 	"
      overlayClassName="fixed inset-0 bg-white bg-opacity-50 "
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 overflow-y-auto max-h-full">
        <h2 className="text-xl font-semibold mb-4">
          {action === "create" ? "Create" : "Update"} {resourceName}
        </h2>
        <form>
          {resourceName == 'post' ? 
          (
            <>
            <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Id:</label>
            <input
              type="number"
              value={item?.id || 0}
              onChange={(e) => {
                setItem({ ...item, id: e.target.value }); 
              }}
              className="mt-1 block w-full rounded-md border-white-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">UserId:</label>
            <input
              type="number"
              value={item?.userId || 0}
              onChange={(e) => setItem({ ...item, userId: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Título:</label>
            <input
              type="text"
              value={item?.title || ''}
              onChange={(e) => setItem({ ...item, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Corpo do texto:</label>
            <textarea
              value={item?.body || ''}
              onChange={(e) => setItem({ ...item, body: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
            </>
          )
         : resourceName == "comment" ? (
          <>
            <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Id:</label>
            <input
              type="number"
              value={item?.id || 0}
              onChange={(e) => setItem({ ...item, id: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">UserId:</label>
            <input
              type="number"
              value={item?.postId || 0}
              onChange={(e) => setItem({ ...item, postId: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Nome:</label>
            <input
              type="text"
              value={item?.name || ''}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <textarea
              value={item?.email || ''}
              onChange={(e) => setItem({ ...item, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Corpo do texto:</label>
            <textarea
              value={item?.body || ''}
              onChange={(e) => setItem({ ...item, body: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          </>
        ) :
        (
          <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Id:</label>
            <input
              type="number"
              value={item?.id || ''}
              onChange={(e) => setItem({ ...item, id: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Nome:</label>
            <input
              type="text"
              value={item?.name || ''}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white-700">Nome de Usuário:</label>
            <input
              type="text"
              value={item?.username || ''}
              onChange={(e) => setItem({ ...item, username: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <textarea
              value={item?.email || ''}
              onChange={(e) => setItem({ ...item, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <label className="block text-sm font-medium text-gray-700"><b>Endereço</b></label>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Rua:</label>
            <textarea
              value={item?.address.street || ''}
              onChange={(e) => setItem({ ...item, 
                address: { 
                  ...item.address, 
                  street: e.target.value 
                } })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Suite:</label>
            <textarea
              value={item?.address.suite || ''}
              onChange={(e) => setItem({ ...item, 
                address: { 
                  ...item.address, 
                  suite: e.target.value 
                } })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Cidade:</label>
            <textarea
              value={item?.address.city || ''}
              onChange={(e) => setItem({ ...item, 
                address: { 
                  ...item.address, 
                  city: e.target.value 
                } })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">CEP:</label>
            <textarea
              value={item?.address.zipcode || 0}
              onChange={(e) => setItem({ ...item, 
                address: { 
                  ...item.address, 
                  zipcode: e.target.value 
                } })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Telefone:</label>
            <textarea
              value={item?.phone || 0}
              onChange={(e) => setItem({ ...item, phone: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Website:</label>
            <textarea
              value={item?.website || ''}
              onChange={(e) => setItem({ ...item, website: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <label className="block text-sm font-medium text-gray-700"><b>Empresa</b></label>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Nome:</label>
            <textarea
              value={item?.company.name || ''}
              onChange={(e) => setItem({ ...item, 
                company: { 
                  ...item.company, 
                  name: e.target.value 
                } })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Frase de Efeito:</label>
            <textarea
              value={item?.company.catchPhrase || ''}
              onChange={(e) => setItem({ ...item, 
                company: { 
                  ...item.company, 
                  catchPhrase: e.target.value 
                }  })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">BS:</label>
            <textarea
              value={item?.company.bs || ''}
              onChange={(e) => setItem({ ...item, 
                company: { 
                  ...item.company, 
                  bs: e.target.value 
                } })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          </>
        )}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => onSubmit(oldId)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {action === "create" ? "Create" : "Update"}
            </button>
            <button
              type="button"
              onClick={onRequestClose}
              className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CrudModal;

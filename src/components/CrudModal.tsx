import React from 'react';
import Modal from 'react-modal';

interface CrudModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  action: "create" | "update";
  item: any;
  setItem: (item: any) => void;
  onSubmit: () => void;
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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`${action === "create" ? "Create" : "Update"} ${resourceName}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-800 bg-opacity-75"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          {action === "create" ? "Create" : "Update"} {resourceName}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Título:</label>
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
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onSubmit}
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

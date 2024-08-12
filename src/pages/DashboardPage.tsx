import React from 'react';
import ListagemPosts from '../components/ListagemPosts';
import CrudModal from '../components/CrudModal';
import Dashboard from '../components/Dashboard';
import CrudLogicResources from '../components/CrudLogicResources'; 

const DashboardPage: React.FC = () => {
    const {
        resources,
        setResources,
        currentItems,
        currentItem,
        setCurrentItem,
        handleCreate,
        handleUpdate,
        handleSubmit,
        deleteItem,
        modalIsOpen,
        setModalIsOpen,
        modalAction,
    } = CrudLogicResources("posts"); 

    return (
        <>
            <div className="mr-64 p-4">
                <Dashboard setResources={setResources} />
            </div>

            <div className="ml-64 p-4">
                <ListagemPosts
                    resources={resources}
                    items={currentItems}
                    handleCreate={handleCreate}
                    handleUpdate={handleUpdate}
                    deleteItem={deleteItem}
                />
                {modalIsOpen && (
                    <CrudModal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    action={modalAction}
                    item={currentItem}
                    setItem={setCurrentItem}
                    onSubmit={handleSubmit}
                    resourceName={resources.slice(0, -1)}
                />
                )}
            </div>
        </>
    );
}

export default DashboardPage;

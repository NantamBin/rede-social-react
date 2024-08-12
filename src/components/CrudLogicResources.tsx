import { useEffect, useState } from 'react';
import { UserInterface } from '../UserInterface.ts';

const CrudLogicResources = (initialResource: string) => {
    const [resources, setResources] = useState(initialResource);
    const [posts, setPosts] = useState<any[]>([]);
    const [comments, setComments] = useState<any[]>([]);
    const [users, setUsers] = useState<UserInterface[]>([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState<any>(null);
    const [modalAction, setModalAction] = useState<"create" | "update">("create");

    useEffect(() => {
        const localPosts = localStorage.getItem('posts');
        const localComments = localStorage.getItem('comments');
        const localUsers = localStorage.getItem('users');

        if (localPosts) {
            setPosts(JSON.parse(localPosts));
        } else {
            fetchPosts();
        }

        if (localComments) {
            setComments(JSON.parse(localComments));
        } else {
            fetchComments();
        }

        if (localUsers) {
            setUsers(JSON.parse(localUsers));
        } else {
            fetchUsers();
        }
    }, []);

    const fetchPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((json) => {
                setPosts(json);
                localStorage.setItem('posts', JSON.stringify(json));
            });
    };

    const fetchComments = () => {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => response.json())
            .then((json) => {
                setComments(json);
                localStorage.setItem('comments', JSON.stringify(json));
            });
    };

    const fetchUsers = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((json) => {
                setUsers(json);
                localStorage.setItem('users', JSON.stringify(json));
            });
    };

    const createItem = (item: any) => {
        if (resources === 'posts') {
            setPosts((prevItems) => {
                const updatedItems = [...prevItems, item];
                localStorage.setItem('posts', JSON.stringify(updatedItems));
                return updatedItems;
            });
        } else if (resources === 'comments') {
            setComments((prevItems) => {
                const updatedItems = [...prevItems, item];
                localStorage.setItem('comments', JSON.stringify(updatedItems));
                return updatedItems;
            });
        } else if (resources === 'users') {
            setUsers((prevItems) => {
                const updatedItems = [...prevItems, item];
                localStorage.setItem('users', JSON.stringify(updatedItems));
                return updatedItems;
            });
        }
    };

    const updateItem = (id: number, updatedItem: any) => {
        if (resources === 'posts') {
            setPosts((prevItems) => {
                const updatedItems = prevItems.map((item) => (item.id === id ? updatedItem : item));
                localStorage.setItem('posts', JSON.stringify(updatedItems));
                return updatedItems;
            });
        } else if (resources === 'comments') {
            setComments((prevItems) => {
                const updatedItems = prevItems.map((item) => (item.id === id ? updatedItem : item));
                localStorage.setItem('comments', JSON.stringify(updatedItems));
                return updatedItems;
            });
        } else if (resources === 'users') {
            setUsers((prevItems) => {
                const updatedItems = prevItems.map((item) => (item.id === id ? updatedItem : item));
                localStorage.setItem('users', JSON.stringify(updatedItems));
                return updatedItems;
            });
        }
    };

    const deleteItem = (id: number) => {
        if (resources === 'posts') {
            setPosts((prevItems) => {
                const updatedItems = prevItems.filter((item) => item.id !== id);
                localStorage.setItem('posts', JSON.stringify(updatedItems));
                return updatedItems;
            });
        } else if (resources === 'comments') {
            setComments((prevItems) => {
                const updatedItems = prevItems.filter((item) => item.id !== id);
                localStorage.setItem('comments', JSON.stringify(updatedItems));
                return updatedItems;
            });
        } else if (resources === 'users') {
            setUsers((prevItems) => {
                const updatedItems = prevItems.filter((item) => item.id !== id);
                localStorage.setItem('users', JSON.stringify(updatedItems));
                return updatedItems;
            });
        }
    };

    const handleCreate = () => {
        setModalAction("create");
        if(resources === "posts"){
            setCurrentItem({ title: '', body: '' });
        } else if(resources === "users"){
            setCurrentItem({userId:'', id:'', title: '', body: '' });
        }
        setModalIsOpen(true);
    };

    const handleUpdate = (item: any) => {
        setModalAction("update");
        setCurrentItem(item);
        setModalIsOpen(true);
    };

    const handleSubmit = () => {
        if (modalAction === "create") {
            createItem(currentItem);
        } else if (modalAction === "update") {
            updateItem(currentItem.id, currentItem);
        }
        setModalIsOpen(false);
    };

    const currentItems = resources === 'posts' ? posts :
                         resources === 'comments' ? comments :
                         users;

    return {
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
        posts,
        comments,
        users
    };
};

export default CrudLogicResources;

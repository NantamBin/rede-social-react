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
        
        setModalIsOpen(false);

    }, [resources]);

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
        console.log(id, updatedItem)
        if (resources === 'posts') {
            setPosts((prevItems) => {
                const updatedItems = prevItems.map((item) => (item.id == id ? updatedItem : item));
                localStorage.setItem('posts', JSON.stringify(updatedItems));
                return updatedItems;
            });
        } else if (resources === 'comments') {
            setComments((prevItems) => {
                const updatedItems = prevItems.map((item) => (item.id == id ? updatedItem : item));
                localStorage.setItem('comments', JSON.stringify(updatedItems));
                return updatedItems;
            });
        } else if (resources === 'users') {
            setUsers((prevItems) => {
                const updatedItems = prevItems.map((item) => (item.id == id ? updatedItem : item));
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
            setCurrentItem({ id: 0, userId: 0, title: '', body: '' });
        }else if(resources === "comments"){
            setCurrentItem({postId: 0, id: 0, name: '', email:'', body: '' });
        } else {
            setCurrentItem({id: 0, name:'', username: '', email: '', address: {street: '', suite:'', city:'', zipcode:0}, phone: 0, website: '', company: {name:'', catchPhrase: '', obs:''} });
        }
        setModalIsOpen(true);
    };

    const handleUpdate = (item: any) => {
        setModalAction("update");
        setCurrentItem(item);
        setModalIsOpen(true);
    };

    const handleSubmit = (oldId: number) => {
        console.log(oldId)
        if (modalAction === "create") {
            createItem(currentItem);
        } else if (modalAction === "update") {
            updateItem(oldId, currentItem);
        }
        setModalIsOpen(false);
    };

    const createComment = (comment: any) => {
        setComments((prevItems) => {
            const updatedItems = [...prevItems, comment];
            localStorage.setItem('comments', JSON.stringify(updatedItems));
            return updatedItems;
        });
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
        users,
        createComment
    };
};

export default CrudLogicResources;

import { Link } from 'react-router-dom';
import React from 'react';
import './Post.css';
import { UserInterface } from '../UserInterface.ts';

interface PostProps {
  id: number,
  userId: number,
  title: string;
  body: string;
  comments: any[];
  users: UserInterface[];
}

const Post: React.FC<PostProps> = ({ id, userId, title, body, comments, users }) => {
  const comentariosPost = comments.filter((comentario) => comentario.postId === id);
  const usuarioPost = users.filter((usuario) => usuario.id === userId)[0];

  return (
    <Link to={`/post/${id}`} className="text-white hover:text-gray-400" state={{ id, title, body, comentariosPost, usuarioPost }}>
      <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg p-6 m-4 w-96 max-w-full shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{body}</p>
      </a>
    </Link>

  );
};

export default Post;

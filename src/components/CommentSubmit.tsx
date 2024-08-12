import React, { useState } from 'react';
import CrudLogicResources from '../components/CrudLogicResources'; 

interface CommentSubmitProps {
    postId: number;
    onNewComment: (comment: any) => void; // Callback prop
}

const CommentSubmit: React.FC<CommentSubmitProps> = ({ postId, onNewComment }) => {
    const [comment, setComment] = useState({ comentario: '', name: '', email: '' });
    const { createComment } = CrudLogicResources("comments"); // Use "comments" to get createComment

    const handleCommentSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (comment.comentario.trim()) {
            const newComment = {
                id: Date.now(), // Simple unique ID generation
                postId,
                name: comment.name,
                email: comment.email,
                body: comment.comentario,
            };
            // Assuming createComment is an async function
            await createComment(newComment);
            onNewComment(newComment); // Notify PostView of the new comment
            setComment({ comentario: '', name: '', email: '' }); // Clear the form fields
        }
    };

    return (
        <form onSubmit={handleCommentSubmit}>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 border-solid border-2 border-sky-500">
                    <textarea
                        id="comment"
                        rows={4}
                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Escreva um comentário..."
                        value={comment.comentario}
                        onChange={(e) => setComment({ ...comment, comentario: e.target.value })}
                        required
                    />
                </div>
                <div className="px-4 py-2 bg-white dark:bg-gray-800 border-solid border-2 border-sky-500">
                    <input
                        type="text"
                        id="name"
                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Escreva o título..."
                        value={comment.name}
                        onChange={(e) => setComment({ ...comment, name: e.target.value })}
                        required
                    />
                </div>
                <div className="px-4 py-2 bg-white dark:bg-gray-800 border-solid border-2 border-sky-500">
                    <input
                        type="email"
                        id="email"
                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Escreva seu email..."
                        value={comment.email}
                        onChange={(e) => setComment({ ...comment, email: e.target.value })}
                        required
                    />
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    >
                        Submeter Comentário
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CommentSubmit;

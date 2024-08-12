import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { UserInterface } from '../UserInterface.ts';
import CommentsSection from '../components/CommentsSection';
import CommentSubmit from '../components/CommentSubmit';
import { useState } from 'react';
import NotFound from '../pages/NotFound';


export default function PostView() {
    const location = useLocation();
    const { id, title, body, comentariosPost, usuarioPost } = location.state as { id: number; title: string; body: string, comentariosPost: any[], usuarioPost: UserInterface };

    const [comments, setComments] = useState(comentariosPost);

    const handleNewComment = (newComment: any) => {
        setComments(prevComments => [...prevComments, newComment]);
    };

    const isValid = id !== undefined && title !== undefined && body !== undefined && comentariosPost !== undefined && usuarioPost !== undefined;

    return (
        <>
        {!isValid ? <NotFound /> : (<>
            <Header />
            <div className="max-w-screen-lg mx-12">
                <main className="mt-10">
                    <div className="mb-4 md:mb-0 w-full mx-auto relative">
                        <div className="px-4 lg:px-0">
                            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                                {title}
                            </h2>
                            <a
                                href="#"
                                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                            >
                                Postagem
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-12">
                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <p className="pb-6">{body}</p>
                        </div>

                        <div className="flex justify-end w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                            <div className="p-4 border-t border-b md:border md:rounded">
                                <div className="flex py-2">
                                    <img src={`https://randomuser.me/api/portraits/men/${usuarioPost.id}.jpg`}
                                        className="h-10 w-10 rounded-full mr-2 object-cover" />
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm"> {usuarioPost.name} </p>
                                        <p className="font-semibold text-gray-600 text-xs"> username: {usuarioPost.username} </p>
                                    </div>
                                    
                                </div>
                                <p className="text-gray-700 py-3">
                                    email: {usuarioPost.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
                <CommentSubmit 
                    postId={id}
                    onNewComment={handleNewComment} // Pass the callback
                />
                <div className="Comment-Section">
                    {comments.map(comment => (
                        <CommentsSection 
                            key={comment.id} 
                            name={comment.name} 
                            body={comment.body} 
                            email={comment.email} 
                        />
                    ))}
                </div>
                <Footer />
            </div>
            </>)
        }
        </>
    );
}


import React from 'react';
import Post from './Posts';
import './PostFeed.css'; 

const PostFeed: React.FC = () => {
  
  const posts = [
    { id: 1, title: 'Postagem 1', content: 'Conteúdo da postagem 1', imageUrl: 'https://static.desygner.com/wp-content/uploads/sites/13/sites/13/2021/03/19052406/ideias-de-post-para-instagram-1024x606.jpg '},
    { id: 2, title: 'Postagem 2', content: 'Conteúdo da postagem 2', imageUrl: 'https://azzagencia.com.br/wp-content/uploads/2018/11/people-carrying-light-bulb-icons-2-min-300x197.jpg' },
    { id: 3, title: 'Postagem 3', content: 'Conteúdo da postagem 3', imageUrl: 'https://neilpatel.com/wp-content/uploads/2016/05/writingposts.jpg' },
  ];

  return (
    <div className="post-feed">
      {posts.map(post => (
        <Post key={post.id} title={post.title} content={post.content} imageUrl={post.imageUrl} />
      ))}
    </div>
  );
};

export default PostFeed;

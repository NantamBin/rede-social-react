
import React from 'react';
import './Post.css'; 

interface PostProps {
  title: string;
  content: string;
  imageUrl?: string; 
}

const Post: React.FC<PostProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="post">
      {imageUrl && <img src={imageUrl} alt="Post" className="post-image" />}
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
    </div>
  );
};

export default Post;

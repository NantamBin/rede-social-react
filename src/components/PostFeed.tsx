
import React from 'react';
import Post from './Posts';
import './PostFeed.css'; 
import CrudLogicResources from '../components/CrudLogicResources'; 


const PostFeed: React.FC = () => {
  
  const { posts } = CrudLogicResources("posts");
  const { comments } = CrudLogicResources("comments");
  const { users } = CrudLogicResources("users");

  return (
    <div className="post-feed">
      {posts.map(post => (
        <Post key={post.id} id={post.id} userId={post.userId} title={post.title} body={post.body} comments={comments} users={users}/>
      ))}
    </div>
  );
};

export default PostFeed;

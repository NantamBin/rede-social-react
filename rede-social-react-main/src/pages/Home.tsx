import React from 'react';
import './Home.css'
import PostFeed from '../components/PostFeed';
const Home: React.FC = () => {
return (
  <section className='home_container'>
      <h1>Bem vindo ao<span>Site de Postagens</span>
    </h1>
     <h2>Compartilhe suas ideias com o mundo!</h2>
    <p>Crie uma postagem e inspire a comunidade.</p>
  <PostFeed/>
  </section>
);
};
export default Home;
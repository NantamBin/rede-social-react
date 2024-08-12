import React from 'react';
import './Home.css'
import PostFeed from '../components/PostFeed';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <section className='home_container'>
        <h1>Bem vindo ao Site de Postagens<span>FrontPaper</span>
        </h1>
        <h2>Compartilhe suas ideias com o mundo!</h2>
        <p>Crie uma postagem e inspire a comunidade.</p>
        <PostFeed />
      </section>
      <Footer />
    </>
  );
};

export default Home;
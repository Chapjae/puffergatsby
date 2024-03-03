import * as React from 'react';
import Welcome from '../images/home/welcome.jpg';
import Layout from '../components/Layout';
import '../styles/global.css';

const Home = () => {
  return (
    <Layout>
      <main>
        <h1 class='text-2xl'>Welcome to Puffer Isle Inn!</h1>
        <img src={Welcome} alt='welcome'></img>
      </main>
    </Layout>
  );
};

export default Home;

export const Head = () => <title>Puffer Isle Inn</title>;

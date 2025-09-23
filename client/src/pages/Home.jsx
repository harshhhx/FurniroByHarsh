import React from 'react';
import Banner from '../components/Home/Banner';
import Browse from '../components/Home/Browse';
import Products from '../components/Home/Products';
import Slide from '../components/Home/Slide';
import Gellary from '../components/Home/Gellary';

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Browse />
      <Products />
      <Slide />
      <Gellary />
    </main>
  );
};

export default Home;
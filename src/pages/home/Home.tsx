import './home.scss';
import NavBar from "../../components/navbar/NavBar";
import { useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

const Home = () => {
 
  return (
    <div className='home'>
      <NavBar />
      <Featured type='movie' />
      <List/>
      <List/>
      <List/>
      
    </div>
  );
};

export default Home;

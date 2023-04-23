import React from 'react';

//import Components
import Bannner from "../components/Banner"
import HouseList from '../components/HouseList'
import Header from '../components/Header';
import Footer from '../components/Footer';



const Home = () => {
  return <div className='min-h-[2000px] '>
    {/* home page components */}

    <Header />
    <Bannner/>
    <HouseList/>
    <Footer/>
  

  </div>;
};

export default Home;

import React from 'react';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Footer from './components/Footer';
import Blog from './Routes/Blog';
import MYSMS from './pages/MYSMS';
import Pricing from './Routes/Pricing';
import Anfac from './pages/Anfac';
import Products from './pages/Products';
import BussinessProducts from './pages/BussinessProducts';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Anfac/>
      <Products/>
      <BussinessProducts/>git-init
      <MYSMS/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Contact from './Routes/Contact';
import Footer from './components/Footer';
import Blog from './Routes/Blog';
import MYSMS from './pages/MYSMS';
import Pricing from './Routes/Pricing';
import Anfac from './pages/Anfac';
import Products from './pages/Products';
import Home from './pages/Home';
import BussinessProducts from './pages/BussinessProducts';
import SlidesCarousel from './components/SlidesCarousel';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<SlidesCarousel/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Outlet/>
      <Anfac/>
      <Products/>
      <BussinessProducts/>
      <MYSMS/>
      
      <Footer/>
    </div>
  );
}

export default App;

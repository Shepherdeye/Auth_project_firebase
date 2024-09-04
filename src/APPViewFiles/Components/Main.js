import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NavBar from './NavBar/NavBar';
import About from './Pages/AboutUS/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products';
import Product from './Pages/Products/Product/Product';
import Cart from './Pages/Cart/Cart';
import ShopingProvider from '../Data/ContextData';
const Main = () => {




    // const redirect=location.path
    return (
        <div style={{ color: "white", width: "100%" }}>
            <ShopingProvider>
            <NavBar />
          <div style={{width:"100vw" ,height:"100vh" ,background:"#333"}} >

          </div>


            
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<Product />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
           </ShopingProvider>

        </div>
    )
}

export default Main
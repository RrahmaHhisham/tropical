import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar';
import Home from './pages/home';
import Cart from './pages/cart';
import Fav from './pages/fav';
import Contact from './pages/contact';
import Motherday from './pages/motherday';
import Details from './pages/details';
import Categoriespage from './pages/categoriespage';

function App() {

  const loadCartFromStorage = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    return storedCart || [];
  };

  const loadFavoritesFromStorage = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    return storedFavorites || [];
  };

  const [cart, setCart] = useState(loadCartFromStorage());
  const [favorites, setFavorites] = useState(loadFavoritesFromStorage());

  const addToCart = (product) => {
    const productExists = cart.find((item) => item.name === product.name);

    if (!productExists) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      alert('المنتج موجود بالفعل في السلة!');
    }
  };

  const addToFavorites = (product) => {
    const updatedFavorites = [...favorites];
    if (!updatedFavorites.find((item) => item.name === product.name)) {
      updatedFavorites.push(product);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} addToFavorites={addToFavorites} />} />
        <Route path="/fav" element={<Fav favorites={favorites} setFavorites={setFavorites} addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mother's-day" element={<Motherday addToCart={addToCart} addToFavorites={addToFavorites} />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Categoriespage" element={<Categoriespage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './Components/Header';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-grow-1">
            <Container fluid>
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Container>
          </main>
          <footer className="bg-light text-center text-muted py-3 mt-auto">
            © 2024 Điện Thoại Store. All rights reserved.
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
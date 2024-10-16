import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.css';  // Add this line

const Header = () => {
  const { cartItemCount } = useCart();

  return (
    <header className="bg-primary text-white py-3">
      <nav className="container d-flex justify-content-between align-items-center">
        <NavLink to="/" className="text-white text-decoration-none fs-4">
          Điện Thoại Store
        </NavLink>
        <NavLink to="/cart" className="btn-cart btn-outline-light">
          Giỏ hàng <span className="cart-count">({cartItemCount})</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
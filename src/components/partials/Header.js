import React from "react";
import {  BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";
import "../../assets/partials.css";
import About from "../../components/About.js";
import Users from "../../components/Users.js";
import Home from "../../components/Home.js";
import Product from "../../pages/Product.js";
import Contact from "../../components/Contact.js";
import Cart from "../../components/Cart.js";


class Header extends React.Component {
  render() {
    return (
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light header">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Shoppo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
               
               <Link className="nav-link" to="/">Home</Link>
             </li>
              <li className="nav-item">
               
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
               
               <Link className="nav-link" to="/contact">Contact Us</Link>
             </li>
             <li className="nav-item">
               
               <Link className="nav-link" to="/cart">Cart</Link>
             </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route exact path="/products" element={<Product/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
        </Router>
    );
  }
}

export default Header;

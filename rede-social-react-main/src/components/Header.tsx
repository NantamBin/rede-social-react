import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/transferir.png';


const Header: React.FC = () => {
  return (
    <header>
      <div className="center">
        <div className="logo-header">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

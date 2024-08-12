import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '/src/assets/Images/transferir.png';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-2 h-12 fixed top-0 left-0 w-full flex items-center justify-between z-50">
      <div className="logo-header flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        <p className="text-white hover:text-gray-400 p-4">FrontPaper</p>
      </div>
      <nav className="flex justify-end">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-400">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>


  );
};

export default Header;

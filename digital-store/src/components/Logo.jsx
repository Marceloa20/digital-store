import React from 'react'
import logo from '../assets/logo.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className='container-logo'>
        <img src={logo} alt="Logo do site." />
        <h1 className="titulo-logo">Digital Store</h1>
    </div>
  )
}

export default Logo
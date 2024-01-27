import React from 'react'
import logo from '../assets/logo.svg';
import style from './Cabecalho.module.css';

const Logo = () => {
  return (
    <div>
        <img src={logo} alt="Logo do site." />
        <h1 className={style}>Digital Store</h1>
    </div>
  )
}

export default Logo
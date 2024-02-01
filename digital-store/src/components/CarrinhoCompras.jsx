import React from 'react'
import carrinhoCompras from '../assets/carrinho-de-compras.png';
import './CarrinhoCompras.css';

const CarrinhoCompras = () => {
  return (
    <div className='container-compras'>
        <img className='logo-compras' src={carrinhoCompras} alt="Carrinho de Compras" />
    </div>
  )
}

export default CarrinhoCompras
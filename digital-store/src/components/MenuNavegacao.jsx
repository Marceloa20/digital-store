import React from 'react'
import './MenuNavegacao.css';

const MenuNavegacao = () => {
  return (
    <div>
        <ul className='listas container-lista'>
            <li className='nav-link'><a href="#" className='link'>Home</a></li>
            <li className='nav-link'><a href="#" className='link'>Produtos</a></li>
            <li className='nav-link'><a href="#" className='link'>Categorias</a></li>
            <li className='nav-link'><a href="#" className='link'>Meus Pedidos</a></li>
        </ul>
    </div>
  )
}

export default MenuNavegacao
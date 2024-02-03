import React from 'react'
import Link from './Link';
import style from './MenuNavegacao.module.css';

const MenuNavegacao = () => {

  const menuItems = [
    "Home",
    "Produtos",
    "Categorias",
    "Meus Pedidos"
  ]

  return (
    <div>
        <ul className={style.containerLista}>
          {menuItems.map(item => (<Link name={item} />))}
        </ul>
    </div>
  )
}

export default MenuNavegacao
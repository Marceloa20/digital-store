import React from 'react'
import style from './Link.module.css';

const Link = (props) => {
  return (
    <li
        className={style.navLink}
    >
        <a 
            href="#"
            className={style.link}>
                {props.name}
        </a>
    </li>
  )
}

export default Link
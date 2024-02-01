import React from 'react'
import lupa from '../assets/lupa.png';
import './CaixaPesquisa.css';

const CaixaPesquisa = () => {
  return (
    <div className='caixa-pesquisa'>
        <input className='input-pesquisa' type="text" id="txtPesquisa" placeholder='Pesquisar produto...' />
        <img className='lupa' src={lupa} alt="Lupa" />
    </div>
  )
}

export default CaixaPesquisa
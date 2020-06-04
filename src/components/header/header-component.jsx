import React from 'react';
import './header.styles.scss'

const Header = ({numIntentos,resetPartida}) => (
  <header>
    <div className="contenedor-header">
      <div className="titulo">Juego de memoria</div>
      <div className="intentos">
        <div className="num-intentos">Número de intentos: {numIntentos}</div>
        <button 
          className='btn-reiniciar'
          onClick = {resetPartida}
        >Reiniciar</button>
      </div>
    </div>
  </header>
);

export default Header;
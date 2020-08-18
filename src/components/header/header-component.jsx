import React from 'react';
import './header.styles.scss'

const Header = ({numIntentos,resetPartida}) => (
  <header className='header-page'>
    <div className="contenedor-header">
      <div className="titulo">Memory Game <i className="fa fa-gamepad"></i></div>
      <div className="intentos">
        <div className="num-intentos"><i className="fa fa-fighter-jet"></i> Attempts: {numIntentos}</div>
        <button 
          className='btn-reiniciar'
          onClick = {resetPartida}
        ><i className="fa fa-refresh"></i> Reset</button>
      </div>
    </div>
  </header>
);

export default Header;
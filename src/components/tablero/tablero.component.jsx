import React from 'react';
import Carta from '../carta/carta.component';
import './tablero.styles.scss';

const Tablero = (props) => {
  const {baraja, parejaSeleccionada, seleccionarCarta} = props;
  return (
    <div className="tablero">
      {baraja.map((carta,index)=>{
        const estaSiendoComparada = parejaSeleccionada.indexOf(carta) > -1;
        return(
          <Carta
          key={index} 
          icono={carta.icono}
          estaSiendoComparada = {estaSiendoComparada}
          seleccionarCarta = {()=>seleccionarCarta(carta)}
          adivinada = {carta.adivinada}
          />)
        }
      )}
    </div>
  );
}

export default Tablero;
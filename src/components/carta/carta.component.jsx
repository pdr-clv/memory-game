import React from 'react';
import './carta.styles.scss';
import ReactCardFlip from "react-card-flip";

const Carta = (props) => {
  const {icono, estaSiendoComparada, seleccionarCarta, adivinada} = props;
  return (
    <div className='carta' onClick={()=>seleccionarCarta()}>
      <ReactCardFlip isFlipped={estaSiendoComparada || adivinada }>
        <div className="portada"></div>
        <div className="contenido">
          <i className={`fa ${icono} fa-5x`}></i>        
        </div>
      </ReactCardFlip>
    </div>
  );
}
export default Carta;
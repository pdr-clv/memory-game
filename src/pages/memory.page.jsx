import React from 'react';
import Header from '../components/header/header-component';
import Tablero from '../components/tablero/tablero.component';
import construirBaraja from '../utils/construirBaraja';
import './memory.page.styles.scss';

const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numIntentos:0
  };
}

class MemoryPage extends React.Component{ 
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }
  
  seleccionarCarta(carta){
    if(
      this.state.estaComparando || 
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.adivinada
    ){
      return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada,carta];
    this.setState({
      parejaSeleccionada
    });
    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja (pareja) {
    this.setState({estaComparando:true});
    setTimeout(()=> {
      const [primeraCarta,segundaCarta] = pareja;
      let baraja = this.state.baraja;

      if(primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono){
            return carta;
          };
          return {...carta, adivinada: true};
        });
      }
      //this.comprobarVictoria(baraja);
      this.setState({
        parejaSeleccionada:[],
        baraja,
        estaComparando: false,
        numIntentos:this.state.numIntentos + 1
      },()=>this.comprobarVictoria());        
    },1500);
  }
  comprobarVictoria(){
    const baraja = this.state.baraja
    if(baraja.filter(carta=>!carta.adivinada).length ===0){
      alert(`All matches founded! You needed ${this.state.numIntentos} attempts`);
    }
  }

  resetPartida(){
    this.setState(getEstadoInicial());
  }

  render(){
    return (
    <div>
      <Header 
        numIntentos={this.state.numIntentos} 
        resetPartida = {()=>this.resetPartida()}  
      />
      <Tablero 
        baraja={this.state.baraja}
        parejaSeleccionada={this.state.parejaSeleccionada}
        seleccionarCarta = { carta => this.seleccionarCarta(carta)}
      />
    </div>
    )
  }
}

export default MemoryPage;

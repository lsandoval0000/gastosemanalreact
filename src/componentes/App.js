import React, { Component } from 'react';
import '../css/App.css'
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helper'
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      gastos : {},
      presupuesto : '',
      restante : ''
    };
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () =>{
    let presupuesto = prompt('¿Cuál es el presupuesto?');
    let resultado = validarPresupuesto(presupuesto);
    if(!resultado)
      this.obtenerPresupuesto();
    else
      this.setState({
        presupuesto: presupuesto,
        restante : presupuesto
      });
  }

  agregarGasto = (infoGasto)=>{
    const gastos = {...this.state.gastos};

    gastos[`gasto${Date.now()}`] = infoGasto;

    this.restarPresupuesto(infoGasto.cantidadGasto);

    this.setState({
      gastos : gastos
    });
  }

  restarPresupuesto = (cantidad) =>{
    let restar = Number(cantidad);
    let restante = this.state.restante;
    restante -= restar;

    restante = String(restante);

    this.setState({
      restante : restante
    });
  }

  render() {
    return (
      <div className="App container">
        <Header
            titulo="Gasto Semanal"
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario
                agregarGasto = {this.agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado
                gastos = {this.state.gastos}
              />
              <ControlPresupuesto
                presupuesto = {this.state.presupuesto}
                restante = {this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
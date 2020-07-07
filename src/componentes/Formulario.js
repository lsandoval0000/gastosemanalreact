import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    constructor(props){
        super(props);

        this.nombreGastoRef = React.createRef();
        this.cantidadGastoRef = React.createRef();
    }

    crearGasto = (e) =>{
        e.preventDefault();

        const infoGasto = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto :this.cantidadGastoRef.current.value
        }
        this.props.agregarGasto(infoGasto);
        e.currentTarget.reset();
    }   

    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreGastoRef}/>
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidadGastoRef}/>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

Formulario.propTypes = {
    agregarGasto : PropTypes.func.isRequired
}

export default Formulario;
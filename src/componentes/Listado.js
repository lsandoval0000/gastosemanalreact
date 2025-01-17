import React, { Component } from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

class Listado extends Component {
    render() {
        return (
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {Object.keys( this.props.gastos ).map(key => (
                    <Gasto
                        gasto = {this.props.gastos[key]}
                        key = {key}
                    />
                ))}
            </div>
        );
    }
}

Listado.propTypes = {
    gastos: PropTypes.object.isRequired
}

export default Listado;
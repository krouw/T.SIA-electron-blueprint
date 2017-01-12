// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class ImpresionesContador extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let content = ''
    if(this.props.isActive){
      content = (
        <div>
          <h4>JORNADA INICIADA</h4>
          <h2 className="is-active">
            {this.props.contadorInicial}
            <span>
              /2525
            </span>
          </h2>
          <p className="is-active">cont. Actual</p>
          <button
            type="button"
            className="pt-button pt-large pt-intent-danger">
            Cerrar Jornada
          </button>
        </div>
      )
    }
    else {
      content = (
        <div>
          <h4>ÚLTIMA JORNADA</h4>
          <h2>{this.props.contadorFinal}</h2>
          <p>{this.props.fecha}</p>
          <button
            type="button"
            className="pt-button pt-large pt-intent-success">
            Iniciar Jornada
          </button>
        </div>
      )
    }

    return (
      <Row center="xs">
        <Col xs={12}>
          { content }
        </Col>
      </Row>
    )}
}

ImpresionesContador.propTypes = {
  isActive: React.PropTypes.bool.isRequired,
  contadorInicial: React.PropTypes.string,
  contadorFinal: React.PropTypes.string,
  fecha: React.PropTypes.sting,
}

export default ImpresionesContador;

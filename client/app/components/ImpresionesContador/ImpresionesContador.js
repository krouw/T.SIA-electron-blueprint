// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class ImpresionesContador extends Component {
  constructor(props){
    super(props);
  }
  
  render(){
    let content = ''
    if(!this.props.data.isContador){
      content = (
        <div>
          <h4>BIENVENIDO!</h4>
          <h2 style={{fontSize:32}}>No hay registros</h2>
          <button
            type="button"
            className="pt-button pt-large pt-intent-success"
            >
            Primera Jornada!
          </button>
        </div>
      )
    }
    else{
      if(this.props.data.isActive){
        content = (
          <div>
            <h4>JORNADA INICIADA</h4>
            <h2 className="is-active">
              {this.props.data.contadorInicial}
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
            <h2>{this.props.data.contadorFinal}</h2>
            <p>{this.props.data.fecha}</p>
            <button
              type="button"
              className="pt-button pt-large pt-intent-success">
              Iniciar Jornada
            </button>
          </div>
        )
      }
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
  data: React.PropTypes.object.isRequired,
}

export default ImpresionesContador;

// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class ImpresionesContador extends Component {
  render(){
    return (
      <Row center="xs">
        <Col xs={12}>
          <h4>ÚLTIMA JORNADA</h4>
          <h2>2401</h2>
          <p>14/12/2016</p>
          <button
            type="button"
            className="pt-button pt-large pt-intent-success">
            Iniciar Jornada
          </button>
        </Col>
      </Row>
    )}
}

export default ImpresionesContador;

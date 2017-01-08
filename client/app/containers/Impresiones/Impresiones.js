// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImpresionesContador from '../../components/ImpresionesContador/ImpresionesContador'
import ImpresionesNuevo from '../../components/ImpresionesNuevo/ImpresionesNuevo'
import { connect } from 'react-redux'
import { addUser } from '../../actions/Impresiones'

class Impresiones extends Component {
  render(){
    return (
      <Row className="Impresiones" between="xs" style={{margin:0}}>
        <Col className="pt-card pt-elevation-1 Impresiones-Contador" xs={12} sm>
          <ImpresionesContador />
        </Col>
        <Col className="pt-card pt-elevation-1 Impresiones-Nuevo" xs={12} sm={8}>
          <ImpresionesNuevo addUser={this.props.addUser} />
        </Col>
      </Row>
    )}
}

Impresiones.propTypes = {
  addUser: React.PropTypes.func.isRequired,
}

export default connect(null, { addUser })(Impresiones);

// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImpresionesContador from '../../components/ImpresionesContador/ImpresionesContador'
import ImpresionesNuevo from '../../components/ImpresionesNuevo/ImpresionesNuevo'
import { connect } from 'react-redux'
import { addUser } from '../../actions/User'
import { addToast } from '../../actions/Toasts'
import { addImpresion } from '../../actions/Impresiones'

class Impresiones extends Component {
  render(){
    return (
      <Row className="Impresiones" between="xs" style={{margin:0}}>
        <Col className="pt-card pt-elevation-1 Impresiones-Contador" xs={12} sm>
          <ImpresionesContador />
        </Col>
        <Col className="pt-card pt-elevation-1 Impresiones-Nuevo" xs={12} sm={8}>
          <ImpresionesNuevo
            addUser={this.props.addUser}
            addToast={this.props.addToast}
            addImpresion={this.props.addImpresion}
          />
        </Col>
      </Row>
    )}
}

Impresiones.propTypes = {
  addUser: React.PropTypes.func.isRequired,
  addToast: React.PropTypes.func.isRequired,
  addImpresion: React.PropTypes.func.isRequired,
}

export default connect(null, { addUser, addToast , addImpresion })(Impresiones);

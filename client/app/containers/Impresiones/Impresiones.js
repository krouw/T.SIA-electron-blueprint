// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImpresionesContador from '../../components/ImpresionesContador/ImpresionesContador'
import ImpresionesNuevo from '../../components/ImpresionesNuevo/ImpresionesNuevo'
import { connect } from 'react-redux'
import { addUser } from '../../actions/User'
import { addToast } from '../../actions/Toasts'
import { addImpresion, getContador } from '../../actions/Impresiones'
import isEmpty from 'lodash/isEmpty'

class Impresiones extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getContador();
  }

  render(){
    const InitialStateForm = {
      rut: '',
      name: '',
      rol: '',
      carrera: '',
      cantidad: '',
      asignatura: '',
      observacion: '',
    };
    return (
      <Row className="Impresiones" between="xs" style={{margin:0}}>
        <Col className="pt-card pt-elevation-1 Impresiones-Contador" xs={12} sm>
          hello
        </Col>
        <Col className="pt-card pt-elevation-1 Impresiones-Nuevo" xs={12} sm={8}>
          <ImpresionesNuevo
            addUser={this.props.addUser}
            addToast={this.props.addToast}
            addImpresion={this.props.addImpresion}
            InitialState={InitialStateForm}
            isActive={this.props.contador.isActive}
          />
        </Col>
      </Row>
    )}
}

Impresiones.propTypes = {
  addUser: React.PropTypes.func.isRequired,
  addToast: React.PropTypes.func.isRequired,
  addImpresion: React.PropTypes.func.isRequired,
  getContador: React.PropTypes.func.isRequired,
  contador: React.PropTypes.object.isRequired,
}

function mapStateToProps(state){
  return {
    contador: state.Contador
  }
}

export default connect(mapStateToProps, { addUser, addToast , addImpresion, getContador })(Impresiones);

// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImpresionesContador from '../../components/ImpresionesContador/ImpresionesContador'
import ImpresionesNuevo from '../../components/ImpresionesNuevo/ImpresionesNuevo'
import { connect } from 'react-redux'
import { addUser } from '../../actions/User'
import { addToast } from '../../actions/Toasts'
import { addImpresion } from '../../actions/Impresiones'
import { getContador,
        addContador,
        updateContador,
        aumentoContador }
        from '../../actions/Contador'
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
          <ImpresionesContador
            data={this.props.contador}
            addContador={this.props.addContador}
            updateContador={this.props.updateContador}
          />
        </Col>
        <Col className="pt-card pt-elevation-1 Impresiones-Nuevo" xs={12} sm={8}>
          <ImpresionesNuevo
            addUser={this.props.addUser}
            addToast={this.props.addToast}
            addImpresion={this.props.addImpresion}
            InitialState={InitialStateForm}
            aumentoContador={this.props.aumentoContador}
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
  addContador: React.PropTypes.func.isRequired,
  updateContador: React.PropTypes.func.isRequired,
  aumentoContador: React.PropTypes.func.isRequired,
  contador: React.PropTypes.object.isRequired,
}

function mapStateToProps(state){
  return {
    contador: state.Contador
  }
}

function mapDispatchToProps(dispatch){
  return {
    addUser: (userData) => dispatch(addUser(userData)),
    addToast: (toast) => dispatch(addToast(toast)),
    addImpresion: (impresionData, rutUser) => dispatch(addImpresion(impresionData, rutUser)),
    getContador: () => dispatch(getContador()),
    addContador: (contador) => dispatch(addContador(contador)),
    updateContador: (contador) => dispatch(updateContador(contador)),
    aumentoContador: () => dispatch(aumentoContador()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Impresiones);

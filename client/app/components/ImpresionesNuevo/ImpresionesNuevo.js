// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {MenuDivider} from '@blueprintjs/core';

class ImpresionesNuevo extends Component {

  constructor(){
    super();
    this.state = {
      rut: '',
      name: '',
      rol: '',
      carrera: ''
    }
  }

  submitUser(e){
    e.preventDefault();
    const userData = {};
    Object.assign(userData,this.state);
    this.props.addUser(userData).then(
      res => console.log(res),
      err => console.log(err.response)
    );
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <form>
        <Row start="xs">
          <Col xs={12} className="Impresiones-Title">
            <p>Usuario</p>
            <MenuDivider />
          </Col>
          <Col xs={12} sm={4} className="Impresiones-Content">
            <label className="pt-label">
              Rut
              <input
                onChange={ (e) => this.onChange(e) }
                name="rut"
                className="pt-input"
                value={this.state.rut}
                type="text"
                dir="auto" />
            </label>
          </Col>
          <Col xs={12} sm={8} className="Impresiones-Content">
            <label className="pt-label">
              Nombre
              <input
                onChange={ (e) => this.onChange(e) }
                name="name"
                className="pt-input"
                type="text"
                value={this.state.nombre}
                dir="auto" />
            </label>
          </Col>
          <Col xs={12} sm={4} className="Impresiones-Content">
            <label className="pt-label">
              Rol
              <input
                onChange={ (e) => this.onChange(e) }
                name="rol"
                className="pt-input"
                value={this.state.rol}
                type="text"
                dir="auto" />
            </label>
          </Col>
          <Col xs={12} sm={8} className="Impresiones-Content">
            <label className="pt-label">
              Carrera
              <input
                onChange={ (e) => this.onChange(e) }
                name="carrera"
                className="pt-input"
                value={this.state.carrera}
                type="text"
                dir="auto" />
            </label>
          </Col>
        </Row>
        <Row end="xs">
          <Col xs={12} >
            <button
              onClick={ e => this.submitUser(e) }
              type="button"
              className="pt-button pt-intent-primary">
              Agregar Usuario
            </button>
          </Col>
        </Row>
        <Row start="xs">
          <Col xs={12} className="Impresiones-Title">
            <p>Impresión</p>
            <MenuDivider />
          </Col>
          <Col xs={12} sm={4} className="Impresiones-Content">
            <label className="pt-label">
              Cantidad Hojas
              <input className="pt-input" type="text" dir="auto" />
            </label>
          </Col>
          <Col xs={12} sm={8} className="Impresiones-Content">
            <label className="pt-label">
              Asigantura
              <input className="pt-input" type="text" dir="auto" />
            </label>
          </Col>
          <Col xs={12} className="Impresiones-Content">
            <label className="pt-label">
              Observación
              <textarea className="pt-input" dir="auto"></textarea>
            </label>
          </Col>
        </Row>
        <Row end="xs">
          <Col xs={12} >
            <button type="button" className="pt-button pt-intent-success">Ingresar Impresión</button>
          </Col>
        </Row>
      </form>
    )}
}

ImpresionesNuevo.propTypes = {
  addUser: React.PropTypes.func.isRequired,
}

export default ImpresionesNuevo;

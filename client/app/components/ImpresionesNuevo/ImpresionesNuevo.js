// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { MenuDivider, Intent } from '@blueprintjs/core';

import axios from 'axios'

class ImpresionesNuevo extends Component {
  constructor(props){
    super(props);
    this.state = this.props.InitialState;
    this.state.disabled = false;
  }

  submitUser(e){
    e.preventDefault();
    const userData = {
      rut: this.state.rut,
      name: this.state.name,
      rol: this.state.rol,
      carrera: this.state.carrera,
    };
    this.props.addUser(userData).then(
      res => {
        this.props.addToast({
          iconName: "pt-icon-person",
          intent: Intent.PRIMARY,
          message: 'Usuario Agregado'
        })
      },
      err => {
        if(err.response.status === 400){
          this.props.addToast({
            iconName: "warning-sign",
            intent: Intent.DANGER,
            message: 'Este usuario ya se encuentra registrado'
          })
        }
      }
    );
  }

  clean(e){
    this.setState(this.props.InitialState);
  }

  submitImpresion(e){
    e.preventDefault();
    const impresionData = {
      cantidad: this.state.cantidad,
      asignatura: this.state.asignatura,
      observacion: this.state.observacion
    };
    this.props.addImpresion(impresionData, this.state.rut).then(
      res => {
        this.props.addToast({
          iconName: "pt-icon-tick",
          intent: Intent.SUCCESS,
          message: 'Impresion Registrada con Éxito!'
        })
        this.props.aumentoContador();
        this.setState(this.props.InitialState);
      },
      err => {
        if(err.response.status === 404){
          this.props.addToast({
            iconName: "warning-sign",
            intent: Intent.DANGER,
            message: 'Usuario no Encontrado'
          })
        }
      }
    );
    this.setState({disabled: false})
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onChangeRut(e){
    this.setState({disabled: false})
    this.setState(this.props.InitialState);
    this.setState({rut: e.target.value});
  }
  onBlur(e){
    //this.setState({rut: e.target.value});
    var rut = this.state.rut;
    var n = rut.length;
    if ( n > 7){
      axios.get('http://localhost:1337/user/findUser/'+rut)
      .then(
        (res) => {
        console.log(res);
        this.setState({name: res.data.name});
        this.setState({rol: res.data.rol});
        this.setState({carrera: res.data.carrera});
        this.setState({disabled: true})
      },
      err => {
        if(err.response.status === 404){
          this.props.addToast({
            iconName: "warning-sign",
            intent: Intent.DANGER,
            message: 'Este usuario no se encuentra registrado'
          })
        }
      }
    );
    }
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
                onBlur={ (e) => this.onBlur(e)}
                onChange={ (e) => this.onChangeRut(e) }
                name="rut"
                className="pt-input"
                value={this.state.rut}
                type="text"
                placeholder="Sin digito verificador"
                dir="auto"
                required="true"/>
            </label>
          </Col>
          <Col xs={12} sm={8} className="Impresiones-Content">
            <label className="pt-label">
              Nombre
              <input
                onChange={ (e) => this.onChange(e) }
                disabled = {this.state.disabled}
                name="name"
                className="pt-input"
                type="text"
                value={this.state.name}
                dir="auto"
                required="true"
                />
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
                dir="auto"
                required="true"
                disabled = {this.state.disabled}/>
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
                dir="auto"
                required="true"
                disabled = {this.state.disabled}/>
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
              <input
                onChange={ e => this.onChange(e) }
                name="cantidad"
                value={this.state.cantidad}
                className="pt-input"
                type="text" dir="auto" />
            </label>
          </Col>
          <Col xs={12} sm={8} className="Impresiones-Content">
            <label className="pt-label">
              Asigantura
              <input
                onChange={ e => this.onChange(e) }
                name="asignatura"
                value={this.state.asignatura}
                className="pt-input"
                type="text" dir="auto" />
            </label>
          </Col>
          <Col xs={12} className="Impresiones-Content">
            <label className="pt-label">
              Observación
              <textarea
                onChange={ e => this.onChange(e) }
                name="observacion"
                value={this.state.observacion}
                className="pt-input"
                dir="auto"></textarea>
            </label>
          </Col>
        </Row>
        <Row end="xs">
          <Col xs={12} >
            <button
              type="button"
              style={{marginRight:8}}
              className="pt-button pt-intent-primary"
              onClick={ e => this.clean(e) }>
              Limpiar Formulario
            </button>
            <button
              type="button"
              disabled={(this.props.isActive ? false : true)}
              className={"pt-button "+ (this.props.isActive ? 'pt-intent-success' : 'pt-disabled')}
              onClick={ e => this.submitImpresion(e) }>
              Ingresar Impresión
            </button>
          </Col>
        </Row>
      </form>
    )}
}

ImpresionesNuevo.propTypes = {
  addUser: React.PropTypes.func.isRequired,
  addToast: React.PropTypes.func.isRequired,
  addImpresion: React.PropTypes.func.isRequired,
  InitialState: React.PropTypes.object.isRequired,
  aumentoContador: React.PropTypes.func.isRequired,
  isActive: React.PropTypes.bool.isRequired,
}

export default ImpresionesNuevo;

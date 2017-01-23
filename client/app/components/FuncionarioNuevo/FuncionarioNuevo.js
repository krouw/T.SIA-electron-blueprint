// @flow
import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import axios from 'axios'
import { Intent } from '@blueprintjs/core';

class FuncionarioNuevo extends Component{
  constructor(props){
    super(props);
    this.state = {
      rut: '',
      name: '',
      email: '',
      password: '',
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  saveFuncionario(e){
    axios.post('http://localhost:1337/admin/',this.state)
    .then( res => {
        this.props.addToast({
          iconName: "pt-icon-person",
          intent: Intent.SUCCESS,
          message: 'Funcionario Agregado'
        });
        this.setState({
          rut: '',
          name: '',
          email: '',
          password: '',
        });
        this.props.addFuncionario(e);
      },
      err => {
        console.log(err);
      })
  }

  render(){
    return (
      <Row start="xs" bottom="sm" className="Historial-Filter">
        <Col xs={6} sm={2}>
          <label className="pt-label">
            Rut
            <input
              className="pt-input"
              name="rut"
              onChange={ e => this.onChange(e) }
              value={this.state.rut}
              type="text"
              dir="auto" />
          </label>
        </Col>
        <Col xs={6} sm={3}>
          <label className="pt-label">
            Nombre
            <input
              className="pt-input"
              name="name"
              onChange={ e => this.onChange(e) }
              value={this.state.name}
              type="text"
              dir="auto" />
          </label>
        </Col>
        <Col xs={5} sm={3}>
          <label className="pt-label">
            Email
            <input
              className="pt-input"
              name="email"
              onChange={ e => this.onChange(e) }
              value={this.state.email}
              type="text"
              dir="auto" />
          </label>
        </Col>
        <Col xs={5} sm={2}>
          <label className="pt-label">
            Password
            <input
              className="pt-input"
              name="password"
              onChange={ e => this.onChange(e) }
              value={this.state.password}
              type="password"
              dir="auto" />
          </label>
        </Col>
        <Col xs={2}>
          <button
            type="button"
            onClick={ e => this.saveFuncionario(e) }
            className="pt-button pt-icon-add pt-intent-success">
            Agregar
          </button>
        </Col>
      </Row>
    )
  }
}

FuncionarioNuevo.propTypes = {
  addFuncionario: React.PropTypes.func.isRequired,
  addToast: React.PropTypes.func.isRequired,
}

export default FuncionarioNuevo;

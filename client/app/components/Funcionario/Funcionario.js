// @flow
import React, { Component } from 'react'
import axios from 'axios'
import { EditableText, Intent } from '@blueprintjs/core';
import isEmpty from 'lodash/isEmpty'

class Funcionario extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.funcionario.id,
      rut: this.props.funcionario.rut,
      name: this.props.funcionario.name,
      email: this.props.funcionario.email,
    }
  }

  handleChange(e,name){
    this.setState({[name]: e});
    const data = {
      id: this.props.funcionario.id,
      [name]: e,
    }
    this.props.updateFuncionario(data);
  }

  handlePassword(e){
    const data = {
      id: this.props.funcionario.id,
      password: e,
    }
    if(!isEmpty(data.password)){
      this.props.updateFuncionario(data);
    }
  }

  handleDelete(e){
    const Dialog = {
      icon: "person",
      title: "Confirmación",
      message: "Desea eliminar al usuario "+this.state.name+"?",
      ButtonclassName: "pt-icon-cross",
      Intent: Intent.DANGER,
      ButtonText: "Eliminar",
      payload: this.state,
    }
    this.props.setDialog(Dialog);
  }

  render(){
    return (
      <tr className="Funcionario">
        <td>
          <EditableText
            selectAllOnFocus={true}
            value={this.state.rut}
            onChange={(e) => this.handleChange(e,'rut')}/>
        </td>
        <td><EditableText
          selectAllOnFocus={true}
          value={this.state.name}
          onChange={(e) => this.handleChange(e,'name')}/>
        </td>
        <td><EditableText
          selectAllOnFocus={true}
          value={this.state.email}
          onChange={(e) => this.handleChange(e,'email')}/>
        </td>
        <td><EditableText
          className="Funcionario-Password"
          selectAllOnFocus={true}
          onChange={(e) => this.handlePassword(e)}/>
        </td>
        <td>
          <button
            className="pt-button pt-minimal pt-icon-cross"
            onClick={(e) => this.handleDelete(e)}
          />
        </td>
      </tr>
    )
  }
}

Funcionario.propTypes = {
  funcionario: React.PropTypes.object.isRequired,
  updateFuncionario: React.PropTypes.func.isRequired,
  setDialog: React.PropTypes.func.isRequired,
  deleteFuncionario: React.PropTypes.func.isRequired,
}

export default Funcionario;

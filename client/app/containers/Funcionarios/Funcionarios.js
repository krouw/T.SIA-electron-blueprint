// @flow
import React, { Component } from 'react'
import axios from 'axios'
import Funcionario from '../../components/Funcionario/Funcionario'
import FuncionarioNuevo from '../../components/FuncionarioNuevo/FuncionarioNuevo'
import { Dialog, Intent, Button } from '@blueprintjs/core';
import { addToast } from '../../actions/Toasts'
import { setDialog } from '../../actions/Dialog'
import { deleteFuncionario } from '../../actions/Funcionario'
import { connect } from 'react-redux'

class Funcionarios extends Component{
  constructor(props){
    super(props);
    this.state = {
      funcionarios: [],
      funcionario: {},
    }
  }

  componentDidMount(){
    axios.get('http://localhost:1337/admin?sort=updatedAt DESC')
      .then( response => {
        const funcionarios = response.data;
        this.setState({
          funcionarios: funcionarios,
        });
    });
  }

  toggleDialog(e){
    this.setState({DialogActive: !this.state.DialogActive})
  }

  updateFuncionario(funcionario){
    axios.put('http://localhost:1337/admin/'+funcionario.id,funcionario)
  }

  addFuncionario(e){
    console.log('dsadsa');
    axios.get('http://localhost:1337/admin?sort=updatedAt DESC')
      .then( response => {
        const funcionarios = response.data;
        this.setState({
          funcionarios: funcionarios,
        });
      })
  }

  deleteFuncionario(e){
    axios.delete('http://localhost:1337/admin/'+this.state.funcionario.id)
    .then( res => {
      this.toggleDialog(e);
      axios.get('http://localhost:1337/admin?sort=updatedAt DESC')
        .then( response => {
          const funcionarios = response.data;
          this.setState({
            funcionarios: funcionarios,
            funcionario: {},
          });
      });
    },
    err => {
      this.props.addToast({
        iconName: "pt-icon-cross",
        intent: Intent.DANGER,
        message: "Sin Conexión"
      });
    })
  }

  render(){
    const funcionarios = this.state.funcionarios.map((funcionario) =>{
      return (
        <Funcionario
          key={funcionario.id}
          funcionario={funcionario}
          updateFuncionario={(funcionario) => this.updateFuncionario(funcionario)}
          setDialog={this.props.setDialog}
          deleteFuncionario={this.props.deleteFuncionario}/>
      )
    });
    return (
      <div>
        <FuncionarioNuevo
          addFuncionario={ (e) => this.addFuncionario(e) }
          addToast={this.props.addToast}
        />
        <table className="Funcionarios pt-table">
          <thead>
            <th>Rut</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Password</th>
            <th></th>
          </thead>
          <tbody>
            { funcionarios }
          </tbody>
        </table>
      </div>
    )
  }
}

Funcionarios.propTypes = {
  addToast: React.PropTypes.func.isRequired,
  setDialog: React.PropTypes.func.isRequired,
  deleteFuncionario: React.PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch){
  return {
    setDialog: (Dialog) => dispatch(setDialog(Dialog)),
    deleteFuncionario: (funcionario) => dispatch(deleteFuncionario(funcionario)),
  }
}

export default connect(null, mapDispatchToProps)(Funcionarios);

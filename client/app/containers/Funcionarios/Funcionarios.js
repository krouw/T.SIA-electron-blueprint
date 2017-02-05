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
      DialogActive: false,
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
    axios.get('http://localhost:1337/admin?sort=updatedAt DESC')
      .then( response => {
        const funcionarios = response.data;
        this.setState({
          funcionarios: funcionarios,
        });
      })
  }

  setDialog(funcionario){
    this.setState({
      DialogActive: true,
      funcionario: funcionario,
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
          setDialog={(funcionario) => this.setDialog(funcionario)}
          deleteFuncionario={(e) => this.deleteFuncionario(e) }/>
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
        <Dialog
          iconName="person"
          isOpen={this.state.DialogActive}
          onClose={ e => this.toggleDialog(e) }
          title="Confirmación">
          <div className="pt-dialog-body">
            Eliminar al usuario {this.state.funcionario.name}
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button text="Cerrar"
                onClick={ e => this.toggleDialog(e) } />
              <Button
                  className="pt-icon-cross"
                  intent={Intent.DANGER}
                  text="Eliminar"
                  onClick={ e => this.deleteFuncionario(e) }/>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

Funcionarios.propTypes = {
  addToast: React.PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch){
  return {
    addToast: (toast) => dispatch(addToast(toast)),
  }
}

export default connect(null, mapDispatchToProps)(Funcionarios);

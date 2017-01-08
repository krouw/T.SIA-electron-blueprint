import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { Intent } from '@blueprintjs/core'

export default class SigninForm extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
      isValid:true
    }

  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e){
    this.setState({ errors: {} });
    e.preventDefault();
    const adminData = {};
    Object.assign(adminData,this.state);
    delete adminData.errors;
    this.props.loginServer(adminData)
    .then((response) => {
      this.props.addToast({
        intent: Intent.SUCCESS,
        text: 'Bienvenido a SIUTEM'
      })
      this.setState({isValid: true})
      hashHistory.push('/home')
    })
    .catch((err)=>{
      console.log(err.response);
      if (err.response.data.code === "AUTH_SIGNIN_NO_E"){
        this.setState({isValid: false})
      }

    });
  }

  render() {
    const { errors } = this.state;

    let err;
    if (!this.state.isValid) {
      err = (
        <div style={{marginBottom: 16,}} className="pt-callout pt-intent-danger">
          <strong>Advertencia!</strong> Problemas con el email y/o contraseña.
        </div>
      )
    }

    return (
      <form onSubmit={event => this.onSubmit(event)} className="pt-control-group pt-vertical">
        { err }
        <div className="pt-input-group pt-large">
          <span className="pt-icon pt-icon-person"></span>
          <input
            onChange={ event => this.onChange(event) }
            name="email" value={this.state.name}
            type="text"
            className="pt-input"
            placeholder="Email" />
        </div>
        <div className="pt-input-group pt-large">
          <span className="pt-icon pt-icon-lock"></span>
          <input
            onChange={ event => this.onChange(event)}
            name="password"
            value={this.state.password} type="password"
            className="pt-input"
            placeholder="Contraseña" />
        </div>
        <button className="pt-button pt-large pt-intent-primary Login-Button">Login</button>
      </form>
    );
  }
}

SigninForm.propTypes = {
  loginServer: React.PropTypes.func.isRequired,
  addToast: React.PropTypes.func.isRequired
};

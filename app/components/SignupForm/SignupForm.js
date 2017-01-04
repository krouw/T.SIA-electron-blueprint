import React, { Component } from 'react';
import axios from 'axios';

export default class SignupForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      username: '',
      rut: '',
      email: '',
      password: '',
    }

  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userSignipRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={event => this.onSubmit(event)} className="pt-control-group pt-vertical">
        <div className="pt-input-group pt-large">
          <span className="pt-icon pt-icon-person"></span>
          <input
            onChange={ event => this.onChange(event) }
            name="name" value={this.state.name}
            type="text"
            className="pt-input"
            placeholder="Nombre" />
        </div>
        <div className="pt-input-group pt-large">
          <span className="pt-icon pt-icon-person"></span>
          <input
            onChange={ event => this.onChange(event)}
            name="username" value={this.state.username}
            type="text"
            className="pt-input"
            placeholder="Nombre de usuario" />
        </div>
        <div className="pt-input-group pt-large">
          <span className="pt-icon pt-icon-person"></span>
          <input
            onChange={ event => this.onChange(event)}
            name="rut" value={this.state.rut}
            type="text"
            className="pt-input"
            placeholder="Rut" />
        </div>
        <div className="pt-input-group pt-large">
          <span className="pt-icon pt-icon-mail"></span>
          <input
            onChange={ event => this.onChange(event)}
            name="email"
            value={this.state.email}
            type="email" className="pt-input"
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

SignupForm.propTypes = {
  userSignipRequest: React.PropTypes.func.isRequired
};

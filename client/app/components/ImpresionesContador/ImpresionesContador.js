// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';

class ImpresionesContador extends Component {
  constructor(props){
    super(props);
    this.state = {
      first: 0,
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  addFristContador(e){
    e.preventDefault();;
    const contador = {
      contadorInicial: this.state.first,
      contadorFinal: this.state.first,
      isActive: true,
    }
    this.props.addContador(contador);

  }

  addContador(e){
    e.preventDefault();
    const contador = {
      contadorInicial: parseInt(this.props.contador.contadorFinal),
      contadorFinal: parseInt(this.props.contador.contadorFinal),
      isActive: true,
    }
    this.props.addContador(contador);
  }

  expiredContador(e){
    e.preventDefault();
    const contador = {
      contadorFinal: this.props.contador.contadorFinal,
      id: this.props.contador.id,
      isActive: false,
    }
    this.props.updateContador(contador);
  }

  render(){
    let content = ''
    if(!this.props.contador.isContador){
      content = (
        <div>
          <h4 style={{fontSize:25}}>BIENVENIDO A SIU</h4>
          <h2 style={{fontSize:15}}>No existen registros, ingrese el primero</h2>
          <input
            style={{textAlign:"center"}}
            onChange={ (e) => this.onChange(e) }
            name="first"
            className="pt-input"
            type="number"
            dir="auto"
            min="0"
            placeholder="Primer Contador"
            required="true"

            />
          <button
            type="button"
            onClick={ (e) => this.addFristContador(e) }
            className="pt-button pt-large pt-intent-success">
            Primera Jornada!
          </button>
        </div>
      )
    }
    else{
      if(this.props.contador.isActive){
        content = (
          <div>
            <h4>JORNADA INICIADA</h4>
            <h2 className="is-active">
              {this.props.contador.contadorInicial}
              <span>
                /{this.props.contador.contadorFinal}
              </span>
            </h2>
            <p className="is-active">cont. Actual</p>
            <button
              type="button"
              onClick={ (e) => this.expiredContador(e) }
              className="pt-button pt-large pt-intent-danger">
              Cerrar Jornada
            </button>
          </div>
        )
      }
      else {
        content = (
          <div>
            <h4>ÚLTIMA JORNADA</h4>
            <h2>{this.props.contador.contadorFinal}</h2>
            <p>{this.props.contador.fecha}</p>
            <button
              type="button"
              onClick={ e => this.addContador(e) }
              className="pt-button pt-large pt-intent-success">
              Iniciar Jornada
            </button>
          </div>
        )
      }
    }

    return (
      <Row style={{marginTop: "10px"}} center="xs">
        <Col xs={12}>
          { content }
        </Col>
      </Row>
    )}
}

ImpresionesContador.propTypes = {
  contador: React.PropTypes.object.isRequired,
  addContador: React.PropTypes.func.isRequired,
  updateContador: React.PropTypes.func.isRequired,
}

export default ImpresionesContador;

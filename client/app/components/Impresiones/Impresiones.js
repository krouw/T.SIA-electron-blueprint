// @flow
import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {MenuDivider} from '@blueprintjs/core';

class Impresiones extends Component {
  render(){
    return (
      <Row className="Impresiones" between="xs" style={{margin:0}}>
        <Col className="pt-card pt-elevation-1 Impresiones-Contador" xs={12} sm>
          <Row center="xs">
            <Col xs={12}>
              <h4>ÚLTIMA JORNADA</h4>
              <h2>2401</h2>
              <p>14/12/2016</p>
              <button
                type="button"
                className="pt-button pt-large pt-intent-success">
                Iniciar Jornada
              </button>
            </Col>
          </Row>
        </Col>
        <Col className="pt-card pt-elevation-1 Impresiones-Nuevo" xs={12} sm={8}>
          <Row start="xs">
            <Col xs={12} className="Impresiones-Title">
              <p>Usuario</p>
              <MenuDivider />
            </Col>
            <Col xs={12} sm={4} className="Impresiones-Content">
              <label className="pt-label">
                Rut
                <input className="pt-input" type="text" dir="auto" />
              </label>
            </Col>
            <Col xs={12} sm={8} className="Impresiones-Content">
              <label className="pt-label">
                Nombre
                <input className="pt-input" type="text" dir="auto" />
              </label>
            </Col>
            <Col xs={12} sm={4} className="Impresiones-Content">
              <label className="pt-label">
                Rol
                <input className="pt-input" type="text" dir="auto" />
              </label>
            </Col>
            <Col xs={12} sm={8} className="Impresiones-Content">
              <label className="pt-label">
                Carrera
                <input className="pt-input" type="text" dir="auto" />
              </label>
            </Col>
          </Row>
          <Row end="xs">
            <Col xs={12} >
              <button type="button" className="pt-button pt-intent-primary">Agregar Usuario</button>
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
        </Col>
      </Row>
    )}
}

export default Impresiones;

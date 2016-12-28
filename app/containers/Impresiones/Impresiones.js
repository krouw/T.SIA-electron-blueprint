// @flow
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import {MenuDivider} from '@blueprintjs/core';

const Impresiones = props => {
  return (
    <Row between="xs">
      <Col className="pt-card pt-elevation-1 Impresiones-Contador" xs>
        <h4>Última Jornada</h4>
        <h3>2401</h3>
        <p>14/12/2016</p>
        <button type="button" className="pt-button pt-large pt-intent-success">Iniciar Jornada</button>
      </Col>
      <Col className="pt-card pt-elevation-1 Impresiones-Nuevo" xs={8}>
        <Row start="xs">
          <Col xs={12} className="Impresiones-Title">
            <p>Usuario</p>
            <MenuDivider />
          </Col>
          <Col xs={12} className="Impresiones-Content">
            <label className="pt-label">
              Rut
              <input className="pt-input" type="text" dir="auto" />
            </label>
            <label className="pt-label">
              Nombre
              <input className="pt-input" type="text" dir="auto" />
            </label>
            <label className="pt-label">
              Rol
              <input className="pt-input" type="text" dir="auto" />
            </label>
            <label className="pt-label">
              Carrera
              <input className="pt-input" type="text" dir="auto" />
            </label>
            <button type="button" className="pt-button pt-intent-primary">Agregar Usuario</button>
          </Col>
          <Col xs={12} className="Impresiones-Title">
            <p>Impresión</p>
            <MenuDivider />
          </Col>
          <Col xs={12} className="Impresiones-Content">
            <label className="pt-label">
              Cantidad Hojas
              <input className="pt-input" type="text" dir="auto" />
            </label>
            <label className="pt-label">
              Asigantura
              <input className="pt-input" type="text" dir="auto" />
            </label>
            <label className="pt-label">
              Observación
              <input className="pt-input" type="text" dir="auto" />
            </label>
            <button type="button" className="pt-button pt-intent-success">Ingresar Impresión</button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Impresiones;

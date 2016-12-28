// @flow
import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';
import LogoImg from '../../logo.png';

export default class Header extends Component {
  render() {
    return (
        <Row center="xs" className="Header pt-navbar" style={{margin:0}}>
          <Col xs={12} sm={10}>
            <Row className="Header-Container" end="xs" middle="xs">
              <Col className="Header-Logo">
                <img src={LogoImg} />
              </Col>
              <Col xs={6}>
                <Link className="pt-button pt-minimal pt-icon-home"></Link>
                <Link className="pt-button pt-minimal pt-icon-user"></Link>
                <Link className="pt-button pt-minimal pt-icon-delete"></Link>
              </Col>
            </Row>
          </Col>
        </Row>
    );
  }
}

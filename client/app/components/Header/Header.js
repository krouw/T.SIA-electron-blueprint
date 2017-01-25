// @flow
import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';
import LogoImg from '../../logo.png';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { hashHistory } from 'react-router';

class Header extends Component {
  logout(e){
    e.preventDefault();
    this.props.logout();
    hashHistory.push('/')
  }

  validateLogout (e){
    axios.get('http://localhost:1337/contador?sort=updatedAt DESC')
  }
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
                <a className="pt-button pt-minimal pt-icon-delete" onClick={event => this.logout(event)}></a>
              </Col>
            </Row>
          </Col>
        </Row>
    );
  }
}

Header.propTypes = {
  logout: React.PropTypes.func.isRequired,
}

export default connect(null,{ logout })(Header);

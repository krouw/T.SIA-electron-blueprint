// @flow
import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import {Link} from 'react-router';
import LogoImg from '../../logo.png';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { hashHistory } from 'react-router';
import { Dialog, Intent, Button } from '@blueprintjs/core';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      DialogActive: false,
    }
  }

  logout(e){
    e.preventDefault();
    if(this.props.contador.isActive){
      this.setState({DialogActive: true})
    }
    else{
      this.confirmLogout();
    }
  }

  confirmLogout(e){
    this.props.logout();
    hashHistory.push('/')
  }

  toggleDialog(e){
    this.setState({DialogActive: !this.state.DialogActive})
  }

  render() {
    return (
      <div>
        <Row center="xs" className="Header pt-navbar" style={{margin:0}}>
          <Col xs={12} sm={10}>
            <Row className="Header-Container" end="xs" middle="xs">
              <Col className="Header-Logo">
                <img src={LogoImg} />
              </Col>
              <Col xs={6}>
                <Link className="pt-button pt-minimal pt-icon-home"></Link>
                <Link className="pt-button pt-minimal pt-icon-user"></Link>
                <a className="pt-button pt-minimal pt-icon-delete" onClick={e => this.logout(e)}></a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Dialog
          iconName="person"
          isOpen={this.state.DialogActive}
          onClose={ e => this.toggleDialog(e) }
          title="Confirmación">
          <div className="pt-dialog-body">
            La jornada sigue activa. Desea salir?
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button text="Cerrar"
                onClick={ e => this.toggleDialog(e) } />
              <Button
                  className="pt-icon-cross"
                  intent={Intent.DANGER}
                  text="Eliminar"
                  onClick={ e => this.confirmLogout(e) }/>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

Header.propTypes = {
  logout: React.PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return {
    contador: state.Contador,
  }
}

export default connect(mapStateToProps,{ logout })(Header);

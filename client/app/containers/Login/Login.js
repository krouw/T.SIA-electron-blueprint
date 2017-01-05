// @flow
import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import SigninForm from '../../components/SigninForm/SigninForm'
import LogoImg from '../../logo.png';
import { loginServer } from '../../actions/auth'
import { addFlashMessage } from '../../actions/flashMessages'
import { connect } from 'react-redux'


class Login extends Component {
  render() {
    const { loginServer, addFlashMessage } = this.props;
    return (
      <Row center="xs" middle="xs" style={{margin:0}}>
        <Col xs={10} sm={6} md={4}>
          <div className="Login-Card pt-card pt-elevation-1">
            <div className="Login-Logo">
              <img src={LogoImg} />
            </div>
            <Row className="Login-Form" center="xs">
              <Col xs={12}>
                <SigninForm
                  loginServer={loginServer}
                  addFlashMessage={addFlashMessage}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}

Login.propTypes = {
  loginServer: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
};

export default connect(null,{ loginServer, addFlashMessage })(Login);

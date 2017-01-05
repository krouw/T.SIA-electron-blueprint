// @flow
import React, { Component } from 'react';
import {Row, Col} from 'react-flexbox-grid';
import SignupForm from '../../components/SignupForm/SignupForm'
import LogoImg from '../../logo.png';
import { loginServer, userSignupRequest } from '../../actions/auth'
import { connect } from 'react-redux'


class Login extends Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <Row center="xs" middle="xs" style={{margin:0}}>
        <Col xs={10} sm={6} md={4}>
          <div className="Login-Card pt-card pt-elevation-1">
            <div className="Login-Logo">
              <img src={LogoImg} />
            </div>
            <Row className="Login-Form" center="xs">
              <Col xs={12}>
                <SignupForm userSignupRequest={userSignupRequest} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}

Login.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
};

export default connect(null,{ userSignupRequest })(Login);

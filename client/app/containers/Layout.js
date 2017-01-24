// @flow
import React from 'react';
import {Row,Col} from 'react-flexbox-grid';
import Header from '../components/Header/Header';
import ToastList from './ToastList/ToastList'
import DialogRender from '../components/Dialog/Dialog'
import { closeDialog } from '../actions/Dialog'
import { connect } from 'react-redux'

const Layout = props => {
  return (
    <section className="Layout">
      <Header />
      <ToastList />
      <Row className="Content" center="xs">
        <Col xs={11} sm={10}>
          {props.children}
        </Col>
      </Row>
      <DialogRender
        Dialog={props.Dialog}
        closeDialog={props.closeDialog}
        action={props.action}/>
    </section>
  );
}


function mapStateToProps(state){
  return {
    Dialog: state.Dialog
  }
}

function mapDispatchToProps(dispatch){
  return {
    closeDialog: (e) => dispatch(closeDialog(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

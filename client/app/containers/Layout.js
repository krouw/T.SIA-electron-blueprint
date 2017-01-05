// @flow
import React from 'react';
import {Row,Col} from 'react-flexbox-grid';
import {Tabs, TabList, TabPanel, Tab} from '@blueprintjs/core';
import Header from '../components/Header/Header';
import FlashMessagesList from './FlashMessagesList/FlashMessagesList'

const Layout = props => {
  return (
    <section className="Layout">
      <Header />
      <FlashMessagesList />
      <Row className="Content" center="xs">
        <Col xs={11} sm={10}>
          {props.children}
        </Col>
      </Row>
    </section>
  );
}

export default Layout;
